This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load its fonts (Inter, Space Grotesk, and Space Mono).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Data-analyysiagentti (`/lab/data-analyst-agent`)

Demo tekoälyagentista, joka vastaa liiketoimintakysymyksiin kuvitteellisesta
verkkokauppadatasta: kirjoittaa ja ajaa SQL-kyselyn itse (Claude API, tool use)
paikallista SQLite-tietokantaa vasten, ja korjaa kyselyn jos se epäonnistuu.

Tietokantana on Node.js:n sisäänrakennettu `node:sqlite`-moduuli (vaatii Node.js
22.13+ tai 23.4+, ks. `engines.node` package.json:ssa). Se ei vaadi mitään
natiivin koodin kääntämistä eikä erillistä pakettia asennukseen — ei siis
node-gyp/Python-riippuvuuksia, jotka aiheuttivat aiemmin `npm install`-ongelmia
Windowsilla. Node tulostaa konsoliin "ExperimentalWarning: SQLite is an
experimental feature" -varoituksen, se on normaalia eikä estä toimintaa.

**Live vs. esilaskettu tila.** Julkinen, tuotantoon deployattu sivu ei kutsu
Claude APIa livenä jokaisella vierailijalla — se olisi ennustamaton kuluriski
avoimella endpointilla, jonka kuka tahansa netissä voisi teoriassa spämmätä.
Sen sijaan neljän esimerkkikysymyksen vastaukset lasketaan kertaalleen etukäteen
(`scripts/precompute-data-agent-examples.mjs`) ja tallennetaan
`data/data-agent-examples.json`-tiedostoon; API-reitti tarkistaa tämän
välimuistin ensin eikä koskaan kutsu ulkoista APIa julkisessa tuotantotilassa,
ellei `DATA_AGENT_LIVE=true` ole erikseen asetettu (ei suositella julkiselle
sivulle ilman kunnollista globaalia kulurajaa). Paikallisessa kehityksessä
(`npm run dev`) live-tila on automaattisesti päällä, joten omilla kysymyksillä
testaaminen toimii suoraan API-avaimella.

Käyttöönotto:

1. `cp .env.example .env.local` ja täytä `ANTHROPIC_API_KEY` (haettavissa osoitteesta
   https://console.anthropic.com/).
2. Siemendata on jo mukana repossa (`data/verkkokauppa.db`). Jos haluat generoida sen
   uudelleen: `npm run seed:data-agent`.
3. `npm run dev` ja avaa `/lab/data-analyst-agent`. Kehitystilassa voit kokeilla myös
   omia kysymyksiä, ei vain esimerkkipainikkeita.
4. Ennen julkista deployta, laske esimerkkivastaukset valmiiksi:
   `node scripts/precompute-data-agent-examples.mjs` (maksaa muutaman sentin,
   tekee 8 API-kutsua). Tämä luo/päivittää `data/data-agent-examples.json`:in,
   joka pitää committaa repoon.

Huomioita tuotantoon viedessä:

- Oletuksena (`DATA_AGENT_LIVE` asettamatta tuotannossa) sivu toimii täysin
  esilaskettujen vastausten varassa eikä vaadi edes `ANTHROPIC_API_KEY`:tä
  deploy-ympäristössä.
- Jos päätät ottaa `DATA_AGENT_LIVE=true` käyttöön julkisella sivulla:
  `app/api/data-agent/route.js` sisältää kevyen muistinvaraisen
  nopeusrajoituksen per IP (20 pyyntöä/tunti) live-kyselyille, mutta se
  nollautuu serverless-instanssin uudelleenkäynnistyessä eikä ole täysi tae.
  Aseta lisäksi kuluraja suoraan Anthropicin konsolista.
- Tietokantayhteys avataan aina `readOnly: true` -tilassa, ja jokainen agentin
  ajama SQL-kysely tarkistetaan koodissa (vain yksi SELECT-lause, ei
  kirjoitusoperaatioita) ennen ajoa — tämä koskee sekä live- että
  esilaskentatilaa.
