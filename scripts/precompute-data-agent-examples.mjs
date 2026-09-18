// Ajaa data-analyysiagentin oikeasti (Claude API + SQLite) jokaiselle
// esimerkkikysymykselle (suomeksi ja englanniksi) ja tallentaa tulokset
// data/data-agent-examples.json-tiedostoon. Julkinen sivu näyttää nämä
// esilasketut vastaukset sen sijaan että kutsuisi APIa jokaisella
// vierailijalla — näin agentin esittely ei aiheuta ennustamattomia kuluja.
//
// Aja: node scripts/precompute-data-agent-examples.mjs
// Vaatii: ANTHROPIC_API_KEY .env.local-tiedostossa (tai ympäristömuuttujana).
// Maksaa muutaman sentin per ajokerta (8 kysymystä, halpa Haiku-malli).

import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Ladataan .env.local käsin (ei next-riippuvuutta tässä skriptissä).
try {
  const { readFileSync, existsSync } = await import("node:fs");
  const envPath = join(__dirname, "..", ".env.local");
  if (existsSync(envPath)) {
    const lines = readFileSync(envPath, "utf-8").split("\n");
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim();
      if (key && !(key in process.env)) {
        process.env[key] = value;
      }
    }
  }
} catch {
  // Ei haittaa jos .env.local puuttuu, ehkä ANTHROPIC_API_KEY on jo asetettu muuten.
}

const { runDataAgent } = await import("../lib/data-agent/agent.js");
const { EXAMPLE_QUESTIONS, normalizeQuestion } = await import("../lib/data-agent/examples.js");

if (!process.env.ANTHROPIC_API_KEY) {
  console.error("ANTHROPIC_API_KEY puuttuu. Lisää se .env.local-tiedostoon ja yritä uudelleen.");
  process.exit(1);
}

const outPath = join(__dirname, "..", "data", "data-agent-examples.json");
const result = {};

const allQuestions = EXAMPLE_QUESTIONS.flatMap((q) => [q.fi, q.en]);

for (const question of allQuestions) {
  process.stdout.write(`Ajetaan: "${question}" ... `);
  try {
    const answer = await runDataAgent(question);
    result[normalizeQuestion(question)] = answer;
    console.log("OK");
  } catch (err) {
    console.log("VIRHE:", err.message);
  }
}

writeFileSync(outPath, JSON.stringify(result, null, 2), "utf-8");
console.log(`\nValmis. Tallennettu ${Object.keys(result).length}/${allQuestions.length} vastausta: ${outPath}`);
