# Janne Kujala, portfolio

[English](#english) | [Suomi](#suomi)

**Live:** [jannekujala.vercel.app](https://jannekujala.vercel.app)

---

## English

My personal portfolio website, showcasing projects that combine business, data, automation and web development.

### Tech stack

- [Next.js](https://nextjs.org/) (App Router) and React
- Tailwind CSS
- `next/font` (Inter, Space Grotesk, Space Mono)
- Claude API (tool use) and Node.js `node:sqlite` in the data analyst agent
- Deployed on Vercel

### Running locally

Requires Node.js 22.13+ or 23.4+ (`node:sqlite`).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Data analyst agent (`/lab/data-analyst-agent`)

A demo AI agent that answers business questions about fictional e-commerce data. The agent writes its own SQL query, runs it against a local SQLite database and fixes the query if it fails.

#### Design decisions

- **No live API calls on the public site.** An open endpoint would be an unpredictable cost risk. Answers to the example questions are precomputed (`scripts/precompute-data-agent-examples.mjs`) and stored in `data/data-agent-examples.json`. Live mode is on only in local development or when `DATA_AGENT_LIVE=true` is set explicitly.
- **Read-only database.** The connection is opened with `readOnly: true`, and every query is validated before it runs: only a single SELECT statement is allowed.
- **Rate limiting.** In live mode, `app/api/data-agent/route.js` limits queries to 20 per hour per IP. The limit is in-memory and not a full guarantee, so in live mode you should also set a spending limit in the Anthropic console.
- **No native dependencies.** `node:sqlite` is built into Node, so installation works on Windows without node-gyp. The console warning "ExperimentalWarning: SQLite is an experimental feature" is expected.

#### Setup

1. `cp .env.example .env.local` and add your `ANTHROPIC_API_KEY` ([console.anthropic.com](https://console.anthropic.com/)).
2. Seed data is included (`data/verkkokauppa.db`). To regenerate it: `npm run seed:data-agent`.
3. Run `npm run dev` and open `/lab/data-analyst-agent`. In development mode you can also try your own questions.
4. Before deploying, precompute the example answers: `node scripts/precompute-data-agent-examples.mjs` (8 API calls, a few cents). Commit the resulting `data/data-agent-examples.json`.

In production the page runs on precomputed answers by default and does not need `ANTHROPIC_API_KEY`.

---

## Suomi

Henkilökohtainen portfoliosivustoni, jossa esittelen projektejani liiketoiminnan, datan, automaation ja web-kehityksen yhdistelmästä.

### Teknologiat

- [Next.js](https://nextjs.org/) (App Router) ja React
- Tailwind CSS
- `next/font` (Inter, Space Grotesk, Space Mono)
- Claude API (tool use) ja Node.js:n `node:sqlite` data-analyysiagentissa
- Julkaistu Vercelissä

### Ajaminen paikallisesti

Vaatii Node.js 22.13+ tai 23.4+ (`node:sqlite`).

```bash
npm install
npm run dev
```

Avaa [http://localhost:3000](http://localhost:3000).

### Data-analyysiagentti (`/lab/data-analyst-agent`)

Demo tekoälyagentista, joka vastaa liiketoimintakysymyksiin kuvitteellisesta verkkokauppadatasta. Agentti kirjoittaa SQL-kyselyn itse, ajaa sen paikallista SQLite-tietokantaa vasten ja korjaa kyselyn, jos se epäonnistuu.

#### Toteutuksen ratkaisut

- **Ei live-API-kutsuja julkisella sivulla.** Avoin endpoint olisi ennustamaton kuluriski. Esimerkkikysymysten vastaukset lasketaan etukäteen (`scripts/precompute-data-agent-examples.mjs`) ja tallennetaan tiedostoon `data/data-agent-examples.json`. Live-tila on päällä vain paikallisessa kehityksessä tai jos `DATA_AGENT_LIVE=true` on erikseen asetettu.
- **Vain luku -tietokanta.** Yhteys avataan `readOnly: true` -tilassa, ja jokainen kysely tarkistetaan ennen ajoa: sallittu on vain yksi SELECT-lause.
- **Nopeusrajoitus.** Live-tilassa `app/api/data-agent/route.js` rajoittaa kyselyt 20:een tunnissa per IP. Rajoitus on muistinvarainen eikä täysi tae, joten live-tilassa kannattaa asettaa myös kuluraja Anthropicin konsolissa.
- **Ei natiiviriippuvuuksia.** `node:sqlite` on Noden sisäänrakennettu moduuli, joten asennus toimii myös Windowsilla ilman node-gypiä. Konsolin "ExperimentalWarning: SQLite is an experimental feature" -varoitus on normaali.

#### Käyttöönotto

1. `cp .env.example .env.local` ja lisää `ANTHROPIC_API_KEY` ([console.anthropic.com](https://console.anthropic.com/)).
2. Siemendata on valmiina (`data/verkkokauppa.db`). Uudelleengenerointi: `npm run seed:data-agent`.
3. `npm run dev` ja avaa `/lab/data-analyst-agent`. Kehitystilassa voit kokeilla myös omia kysymyksiä.
4. Ennen julkaisua laske esimerkkivastaukset: `node scripts/precompute-data-agent-examples.mjs` (8 API-kutsua, muutama sentti). Committaa syntynyt `data/data-agent-examples.json`.

Tuotannossa sivu toimii oletuksena pelkkien esilaskettujen vastausten varassa eikä tarvitse `ANTHROPIC_API_KEY`:tä.
