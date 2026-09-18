import { DatabaseSync } from "node:sqlite";
import { existsSync } from "node:fs";
import path from "node:path";

// Käytetään Node.js:n sisäänrakennettua node:sqlite-moduulia (vakiona mukana
// Node 22.13+ / 23.4+, ei vaadi natiivia kääntämistä eikä erillistä pakettia
// kuten better-sqlite3, joka vaatii node-gyp:n ja Pythonin kääntääkseen
// natiivin binäärin — se aiheutti asennusongelmia Windowsilla).
const DB_PATH = path.join(process.cwd(), "data", "verkkokauppa.db");

let db = null;

// Avaa tietokannan lukutilassa (readOnly: true), jotta SQLite itse estää
// kaikki kirjoitusoperaatiot riippumatta siitä mitä agentti yrittäisi ajaa.
// Yhteys välimuistitetaan moduulitasolla, jotta samaa lambda/serverless-
// instanssia käyttävät pyynnöt eivät avaa tiedostoa joka kerta uudelleen.
export function getDb() {
  if (db) return db;

  if (!existsSync(DB_PATH)) {
    throw new Error(
      `Tietokantaa ei löytynyt (${DB_PATH}). Aja ensin: node scripts/seed-data-agent-db.mjs`
    );
  }

  db = new DatabaseSync(DB_PATH, { readOnly: true });
  return db;
}

// Ihmisluettava skeeman kuvaus, jonka agentti saa "list_tables"-työkalusta.
export const SCHEMA_DESCRIPTION = `
Taulut kuvitteellisen verkkokaupan tietokannassa:

asiakkaat (id, nimi, kaupunki, segmentti, liittymispaiva)
  - segmentti: 'uusi' | 'kanta-asiakas' | 'yritysasiakas'
  - liittymispaiva: ISO-päivämäärä (YYYY-MM-DD)

tuotteet (id, nimi, kategoria, hinta)
  - hinta: euroina (REAL)

tilaukset (id, asiakas_id, tilauspaiva, tila)
  - asiakas_id viittaa asiakkaat.id:hen
  - tila: 'maksettu' | 'toimitettu' | 'palautettu' | 'peruttu'
  - tilauspaiva: ISO-päivämäärä (YYYY-MM-DD), kattaa viimeiset ~12 kuukautta

tilausrivit (id, tilaus_id, tuote_id, maara, yksikkohinta)
  - tilaus_id viittaa tilaukset.id:hen
  - tuote_id viittaa tuotteet.id:hen
  - liikevaihto per rivi = maara * yksikkohinta
`.trim();

const FORBIDDEN_PATTERN =
  /\b(insert|update|delete|drop|alter|attach|detach|pragma|vacuum|reindex|create|replace)\b/i;

const MAX_ROWS = 200;

// Ajaa read-only SELECT-kyselyn turvallisesti. Palauttaa { rows } tai { error }
// koskaan heittämättä poikkeusta ulos, jotta agentin kutsuja voi näyttää
// virheen agentille (joka usein osaa korjata kyselyn itse).
export function runReadOnlyQuery(sql) {
  const trimmed = sql.trim().replace(/;+\s*$/, "");

  if (!trimmed) {
    return { error: "Tyhjä SQL-kysely." };
  }
  if (trimmed.includes(";")) {
    return { error: "Vain yksi SQL-lause kerrallaan on sallittu." };
  }
  if (!/^select\b/i.test(trimmed)) {
    return { error: "Vain SELECT-kyselyt ovat sallittuja." };
  }
  if (FORBIDDEN_PATTERN.test(trimmed)) {
    return { error: "Kysely sisältää kielletyn avainsanan (vain lukuoperaatiot ovat sallittuja)." };
  }

  try {
    const database = getDb();
    const stmt = database.prepare(trimmed);
    const rows = stmt.all();
    const truncated = rows.length > MAX_ROWS;
    return { rows: truncated ? rows.slice(0, MAX_ROWS) : rows, truncated };
  } catch (err) {
    return { error: err.message };
  }
}
