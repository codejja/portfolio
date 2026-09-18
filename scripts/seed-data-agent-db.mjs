// Generoi kuvitteellisen verkkokaupan SQLite-tietokannan data-analyysiagentin demoa varten.
// Data on täysin keksittyä (ei oikeita asiakkaita tai tilauksia).
//
// Aja: node scripts/seed-data-agent-db.mjs
// Tuottaa: data/verkkokauppa.db

import { DatabaseSync } from "node:sqlite";
import { mkdirSync, existsSync, unlinkSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, "..", "data");
const dbPath = join(dataDir, "verkkokauppa.db");

if (!existsSync(dataDir)) {
  mkdirSync(dataDir, { recursive: true });
}
if (existsSync(dbPath)) {
  unlinkSync(dbPath);
}

// Deterministinen pseudosatunnaisgeneraattori, jotta data on toistettavissa samanlaisena.
function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(20260916);
const pick = (arr) => arr[Math.floor(rand() * arr.length)];
const randInt = (min, max) => Math.floor(rand() * (max - min + 1)) + min;

const db = new DatabaseSync(dbPath);

db.exec(`
  CREATE TABLE asiakkaat (
    id INTEGER PRIMARY KEY,
    nimi TEXT NOT NULL,
    kaupunki TEXT NOT NULL,
    segmentti TEXT NOT NULL,
    liittymispaiva TEXT NOT NULL
  );

  CREATE TABLE tuotteet (
    id INTEGER PRIMARY KEY,
    nimi TEXT NOT NULL,
    kategoria TEXT NOT NULL,
    hinta REAL NOT NULL
  );

  CREATE TABLE tilaukset (
    id INTEGER PRIMARY KEY,
    asiakas_id INTEGER NOT NULL REFERENCES asiakkaat(id),
    tilauspaiva TEXT NOT NULL,
    tila TEXT NOT NULL
  );

  CREATE TABLE tilausrivit (
    id INTEGER PRIMARY KEY,
    tilaus_id INTEGER NOT NULL REFERENCES tilaukset(id),
    tuote_id INTEGER NOT NULL REFERENCES tuotteet(id),
    maara INTEGER NOT NULL,
    yksikkohinta REAL NOT NULL
  );
`);

// --- Asiakkaat ---
const etunimet = ["Anna", "Mikko", "Laura", "Juha", "Emilia", "Sami", "Hanna", "Ville", "Sofia", "Antti", "Elina", "Tomi", "Kaisa", "Markus", "Riikka", "Jani", "Noora", "Petri", "Johanna", "Matti"];
const sukunimet = ["Virtanen", "Korhonen", "Mäkinen", "Nieminen", "Koskinen", "Heikkinen", "Laine", "Lehtonen", "Salo", "Kallio", "Ahonen", "Järvinen", "Toivonen", "Rantanen", "Manninen"];
const kaupungit = ["Helsinki", "Turku", "Tampere", "Oulu", "Jyväskylä", "Kuopio", "Lahti", "Pori", "Vaasa", "Joensuu"];
const segmentit = ["uusi", "kanta-asiakas", "yritysasiakas"];

const customerStmt = db.prepare(
  "INSERT INTO asiakkaat (id, nimi, kaupunki, segmentti, liittymispaiva) VALUES (?, ?, ?, ?, ?)"
);
const CUSTOMER_COUNT = 140;
for (let i = 1; i <= CUSTOMER_COUNT; i++) {
  const nimi = `${pick(etunimet)} ${pick(sukunimet)}`;
  const kaupunki = pick(kaupungit);
  const segmentti = pick(segmentit);
  const monthsAgo = randInt(1, 30);
  const liittymispaiva = isoDateMonthsAgo(monthsAgo, randInt(1, 28));
  customerStmt.run(i, nimi, kaupunki, segmentti, liittymispaiva);
}

// --- Tuotteet ---
const tuoteData = [
  ["Langattomat kuulokkeet", "Elektroniikka", 79.9],
  ["Älykello", "Elektroniikka", 149.0],
  ["Kannettava kaiutin", "Elektroniikka", 59.9],
  ["USB-C-latauskaapeli 2m", "Elektroniikka", 12.9],
  ["Powerbank 20000mAh", "Elektroniikka", 34.9],
  ["Robottiimuri", "Koti ja piha", 349.0],
  ["Puutarhasakset", "Koti ja piha", 22.5],
  ["LED-valosarja ulkokäyttöön", "Koti ja piha", 39.9],
  ["Grillihiilet 5kg", "Koti ja piha", 9.9],
  ["Sisustustyyny", "Koti ja piha", 24.9],
  ["Miesten juoksutakki", "Vaatteet", 89.9],
  ["Naisten villapaita", "Vaatteet", 64.9],
  ["Lasten talvihaalari", "Vaatteet", 119.0],
  ["Pipo", "Vaatteet", 19.9],
  ["Juoksukengät", "Urheilu", 109.0],
  ["Jooga-alusta", "Urheilu", 29.9],
  ["Kuntopyörä", "Urheilu", 399.0],
  ["Vastuskuminauhasetti", "Urheilu", 17.9],
  ["Dekkari: Talven jäljet", "Kirjat", 24.9],
  ["Keittokirja: Pohjoismainen keittiö", "Kirjat", 32.9],
  ["Lasten kuvakirja", "Kirjat", 14.9],
  ["Rakennuspalikkasetti", "Lelut", 44.9],
  ["Lautapeli: Kaupunkirakentajat", "Lelut", 39.9],
  ["Pehmolelu", "Lelut", 16.9],
  ["Kasvovoide", "Kauneus", 27.9],
  ["Hiustenkuivaaja", "Kauneus", 54.9],
  ["Meikkipaletti", "Kauneus", 36.9],
  ["Suomalainen hunaja 500g", "Ruoka ja juoma", 8.9],
  ["Kahvipaketti, luomu", "Ruoka ja juoma", 11.9],
  ["Teevalikoima, lahjapakkaus", "Ruoka ja juoma", 19.9],
];
const productStmt = db.prepare("INSERT INTO tuotteet (id, nimi, kategoria, hinta) VALUES (?, ?, ?, ?)");
tuoteData.forEach(([nimi, kategoria, hinta], idx) => {
  productStmt.run(idx + 1, nimi, kategoria, hinta);
});

// --- Tilaukset ja tilausrivit ---
// "Koti ja piha" ja "Urheilu" tehdään tarkoituksella heikommin myyviksi kategorioiksi,
// jotta agentilla on jotain oikeaa löydettävää liiketoimintakysymyksiin vastatessa.
const tilat = ["maksettu", "toimitettu", "toimitettu", "toimitettu", "palautettu", "peruttu"];
const heikkoKategoria = new Set(["Koti ja piha", "Urheilu"]);

const orderStmt = db.prepare("INSERT INTO tilaukset (id, asiakas_id, tilauspaiva, tila) VALUES (?, ?, ?, ?)");
const itemStmt = db.prepare(
  "INSERT INTO tilausrivit (id, tilaus_id, tuote_id, maara, yksikkohinta) VALUES (?, ?, ?, ?, ?)"
);

let orderId = 1;
let itemId = 1;
const ORDER_COUNT = 520;

for (let i = 0; i < ORDER_COUNT; i++) {
  const asiakasId = randInt(1, CUSTOMER_COUNT);
  const monthsAgo = randInt(0, 11); // viimeiset 12 kuukautta
  const tilauspaiva = isoDateMonthsAgo(monthsAgo, randInt(1, 28));
  const tila = pick(tilat);
  orderStmt.run(orderId, asiakasId, tilauspaiva, tila);

  const itemCount = randInt(1, 4);
  const usedProducts = new Set();
  for (let j = 0; j < itemCount; j++) {
    let productIdx;
    // Painotetaan heikkoja kategorioita hieman harvemmin valituiksi, jotta myynti jää aidosti matalammaksi.
    do {
      const candidateIdx = randInt(0, tuoteData.length - 1);
      const [, kategoria] = tuoteData[candidateIdx];
      if (heikkoKategoria.has(kategoria) && rand() < 0.55) continue;
      productIdx = candidateIdx;
      break;
    } while (true);
    if (usedProducts.has(productIdx)) continue;
    usedProducts.add(productIdx);

    const [, , hinta] = tuoteData[productIdx];
    const maara = randInt(1, 3);
    itemStmt.run(itemId, orderId, productIdx + 1, maara, hinta);
    itemId++;
  }
  orderId++;
}

function isoDateMonthsAgo(monthsAgo, day) {
  const now = new Date("2026-09-16T00:00:00Z");
  const d = new Date(now);
  d.setUTCMonth(d.getUTCMonth() - monthsAgo);
  d.setUTCDate(Math.min(day, 28));
  return d.toISOString().slice(0, 10);
}

db.close();

console.log(`Siemendata luotu: ${dbPath}`);
console.log(`  asiakkaat: ${CUSTOMER_COUNT}`);
console.log(`  tuotteet: ${tuoteData.length}`);
console.log(`  tilaukset: ${orderId - 1}`);
console.log(`  tilausrivit: ${itemId - 1}`);
