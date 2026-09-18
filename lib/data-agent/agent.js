import Anthropic from "@anthropic-ai/sdk";
import { SCHEMA_DESCRIPTION, runReadOnlyQuery } from "./db.js";

const MODEL = process.env.ANTHROPIC_MODEL || "claude-haiku-4-5-20251001";
const MAX_STEPS = 6;
const MAX_TOKENS = 1024;

const SYSTEM_PROMPT = `
Olet data-analyysiagentti, joka vastaa liiketoimintakysymyksiin kuvitteellisen
verkkokaupan SQLite-tietokannasta. Kaikki data on keksittyä demodataa.

Työskentelytapa:
1. Jos et ole varma tietokannan rakenteesta, kutsu ensin "list_tables"-työkalua.
2. Kirjoita SQLite-yhteensopiva SELECT-kysely ja aja se "run_query"-työkalulla.
   Vain SELECT-lauseet ovat sallittuja, älä koskaan yritä muokata dataa.
3. Jos kysely epäonnistuu, lue virheviesti ja korjaa kysely itse. Älä anna
   virheen jäädä selittämättä käyttäjälle.
4. Kun sinulla on riittävästi dataa, vastaa käyttäjän kysymykseen selkeästi
   ja perustele vastaus konkreettisilla luvuilla kyselyn tuloksista. Älä
   koskaan keksi lukuja jotka eivät tulleet kyselyn tuloksesta.
5. Pidä kyselyt kohtuullisen kokoisina (käytä tarvittaessa LIMIT, GROUP BY,
   ORDER BY). Vastaa aina samalla kielellä kuin käyttäjän kysymys on esitetty
   (suomi tai englanti).
6. Kirjoita lopullinen vastaus pelkkänä tekstinä, ei koskaan Markdown-
   muotoiluna. Älä käytä tähtiä lihavointiin (**teksti**), otsikkomerkkejä (#),
   listamerkkejä tai muuta Markdown-syntaksia — pelkkiä tavallisia lauseita.

${SCHEMA_DESCRIPTION}
`.trim();

const TOOLS = [
  {
    name: "list_tables",
    description:
      "Palauttaa tietokannan taulujen ja sarakkeiden kuvauksen. Kutsu tätä ensin, jos et muista skeemaa tarkasti.",
    input_schema: {
      type: "object",
      properties: {},
    },
  },
  {
    name: "run_query",
    description:
      "Ajaa read-only SQLite SELECT -kyselyn tietokantaa vasten ja palauttaa tulosrivit JSON-muodossa. Vain SELECT sallittu.",
    input_schema: {
      type: "object",
      properties: {
        sql: {
          type: "string",
          description: "Suoritettava SELECT-kysely SQLite-syntaksilla.",
        },
      },
      required: ["sql"],
    },
  },
];

// Varmistaa, ettei vastauksessa näy raakaa Markdown-syntaksia, vaikka malli
// ei aina noudattaisikaan systeemipromptin ohjetta täydellisesti. Poistaa
// lihavoinnin/kursiivin tähdet ja alaviivat, otsikkomerkit sekä koodimerkit.
function stripMarkdown(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/__(.+?)__/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/_(.+?)_/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/`([^`]+)`/g, "$1")
    .trim();
}

function executeTool(name, input) {
  if (name === "list_tables") {
    return { schema: SCHEMA_DESCRIPTION };
  }
  if (name === "run_query") {
    return runReadOnlyQuery(input.sql || "");
  }
  return { error: `Tuntematon työkalu: ${name}` };
}

// Ajaa koko agenttisilmukan yhdelle kysymykselle ja palauttaa sekä
// näkyvän askelketjun (steps) että lopullisen vastauksen (answer).
// steps-taulukon avulla käyttöliittymä voi näyttää läpinäkyvästi mitä
// agentti teki: mitä työkaluja se kutsui, millä syötteillä ja mitä sai takaisin.
export async function runDataAgent(question) {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error("MISSING_API_KEY");
  }

  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const messages = [{ role: "user", content: question }];
  const steps = [];

  for (let step = 0; step < MAX_STEPS; step++) {
    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      system: SYSTEM_PROMPT,
      tools: TOOLS,
      messages,
    });

    const textBlocks = response.content.filter((b) => b.type === "text" && b.text.trim());
    const toolUseBlocks = response.content.filter((b) => b.type === "tool_use");

    if (toolUseBlocks.length === 0 || response.stop_reason !== "tool_use") {
      // Tämä on viimeinen vastaus (ei enää työkalukutsuja): tekstiä ei lisätä
      // steps-listaan "ajatuksena", koska se palautetaan jo answer-kenttänä
      // eikä sitä pidä näyttää kahteen kertaan käyttöliittymässä.
      const finalText = stripMarkdown(textBlocks.map((b) => b.text).join("\n\n").trim());
      return {
        steps,
        answer: finalText || "Agentti ei tuottanut lopullista vastausta.",
      };
    }

    // Välivaiheen pohdinta ennen työkalukutsua näytetään omana askeleena.
    for (const block of textBlocks) {
      steps.push({ type: "thought", text: block.text.trim() });
    }

    messages.push({ role: "assistant", content: response.content });

    const toolResults = [];
    for (const block of toolUseBlocks) {
      const result = executeTool(block.name, block.input);
      steps.push({
        type: "tool_call",
        tool: block.name,
        input: block.input,
        output: result,
      });
      toolResults.push({
        type: "tool_result",
        tool_use_id: block.id,
        content: JSON.stringify(result),
        is_error: Boolean(result?.error),
      });
    }
    messages.push({ role: "user", content: toolResults });
  }

  return {
    steps,
    answer:
      "Agentti ei löytänyt vastausta sallitussa askelmäärässä. Kokeile tarkentaa kysymystä.",
  };
}
