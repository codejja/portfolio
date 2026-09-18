import { NextResponse } from "next/server";
import { runDataAgent } from "../../../lib/data-agent/agent";
import { getCachedAnswer } from "../../../lib/data-agent/cache";

export const runtime = "nodejs";

// Julkisella (tuotanto-) sivulla agentti EI kutsu Claude APIa livenä
// oletuksena: neljän esimerkkikysymyksen vastaukset on esilaskettu (ks.
// scripts/precompute-data-agent-examples.mjs) ja tallennettu
// data/data-agent-examples.json-tiedostoon, koska julkinen, kenen tahansa
// kutsuttavissa oleva live-endpoint olisi ennustamaton kuluriski.
// Paikallisessa kehityksessä (npm run dev, NODE_ENV !== "production") live-
// tila on päällä automaattisesti, jotta omilla kysymyksillä testaaminen
// toimii suoraan API-avaimella ilman erillistä lippua. Julkiselle,
// tuotantoon deployatulle sivulle live-tilan voi silti ottaa käyttöön
// asettamalla DATA_AGENT_LIVE=true, mutta silloin kulut eivät ole enää
// ennustettavissa (ks. README).
const LIVE_MODE = process.env.DATA_AGENT_LIVE === "true" || process.env.NODE_ENV !== "production";

// Yksinkertainen muistinvarainen nopeusrajoitus per IP livetilalle. Nollautuu
// aina kun serverless-instanssi käynnistyy uudelleen, joten tämä on vain
// kevyt lisäsuoja, ei täysi tae.
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const requestLog = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "INVALID_BODY" }, { status: 400 });
  }

  const question = typeof body?.question === "string" ? body.question.trim() : "";
  if (!question) {
    return NextResponse.json({ error: "MISSING_QUESTION" }, { status: 400 });
  }
  if (question.length > 300) {
    return NextResponse.json({ error: "QUESTION_TOO_LONG" }, { status: 400 });
  }

  // 1) Esilaskettu vastaus, ei koskaan kutsu APIa eikä maksa mitään.
  const cached = getCachedAnswer(question);
  if (cached) {
    return NextResponse.json({ ...cached, cached: true });
  }

  // 2) Ei löytynyt välimuistista. Jos live-tila ei ole päällä, ei kutsuta
  //    APIa lainkaan, vaan selitetään tilanne ystävällisesti.
  if (!LIVE_MODE) {
    return NextResponse.json({
      steps: [],
      answer: null,
      cached: false,
      disabled: true,
    });
  }

  // 3) Live-tila päällä (esim. paikallinen esittely): oikea agenttikutsu.
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "RATE_LIMITED", message: "Liikaa kyselyitä. Yritä myöhemmin uudelleen." },
      { status: 429 }
    );
  }

  try {
    const result = await runDataAgent(question);
    return NextResponse.json({ ...result, cached: false });
  } catch (err) {
    if (err.message === "MISSING_API_KEY") {
      return NextResponse.json(
        {
          error: "MISSING_API_KEY",
          message:
            "Live-tila on päällä mutta ANTHROPIC_API_KEY puuttuu palvelimelta. Katso README.",
        },
        { status: 503 }
      );
    }
    return NextResponse.json(
      { error: "AGENT_ERROR", message: "Agentti kohtasi odottamattoman virheen." },
      { status: 500 }
    );
  }
}
