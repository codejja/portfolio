export const portfolioSivusto = {
  slug: "portfolio-sivusto",
  category: "web",
  title: { fi: "Portfolio-sivusto", en: "Portfolio website" },
  status: { fi: "Oma projekti", en: "Own project" },
  summary: {
    fi: "Sivusto, jota luet juuri nyt. Next.js 16:lla ja React 19:llä rakennettu, Tailwind CSS:llä tyylitelty portfolio, jonka julkaisuputki (GitHub → Vercel) vie jokaisen muutoksen automaattisesti tuotantoon.",
    en: "The site you're reading right now. A portfolio built with Next.js 16 and React 19, styled with Tailwind CSS, with a release pipeline (GitHub → Vercel) that ships every change to production automatically.",
  },
  technologies: ["Next.js", "React", "Tailwind CSS", "Claude AI", "Vercel"],
  githubUrl: "https://github.com/codejja/portfolio26",
  liveUrl: "#",
  hasDetail: true,
  detail: {
    problem: {
      fi: "Halusin oman portfolion, joka näyttää tekemistäni suoraan sen sijaan että vain kuvailisi sitä tekstinä. Sivun piti itsessään olla näyttö siitä, että osaan viedä projektin ideasta oikeaan tuotantoympäristöön asti: koodi, julkaisuputki ja livenä toimiva palvelu, ei vain paikallinen demo.",
      en: "I wanted my own portfolio to show what I can actually do, not just describe it in text. The site itself needed to be proof that I can take a project from an idea all the way to a real production environment: the code, the release pipeline, and a genuinely live service, not just a local demo.",
    },
    architectureIntro: {
      fi: "Sivusto on rakennettu Next.js:n App Routerilla ilman erillistä backend-palvelua, ja se julkaistaan automatisoidun putken kautta:",
      en: "The site is built on Next.js's App Router with no separate backend service, and it ships through an automated pipeline:",
    },
    architecturePoints: [
      {
        fi: "Next.js 16 (App Router) ja React 19: sisältö renderöidään palvelimella, ja 10 projektin yksityiskohtasivut generoidaan staattisina build-aikana (generateStaticParams) parhaan latausnopeuden ja hakukonenäkyvyyden vuoksi.",
        en: "Next.js 16 (App Router) and React 19: content is server-rendered, and 10 of the project detail pages are statically generated at build time (generateStaticParams) for the best load speed and search visibility.",
      },
      {
        fi: "Tailwind CSS 4 tyyleihin. Tumma/vaalea teema hallitaan omalla Context-ratkaisulla, jossa palvelimen renderöimä oletus ja clientin alkutila on tarkoituksella sama, jottei sivu väläytä väärää teemaa ennen kuin JS ehtii lukea käyttäjän tallennetun valinnan localStoragesta.",
        en: "Tailwind CSS 4 for styling. Dark/light theme is handled with a custom Context, where the server-rendered default and the client's initial state are deliberately kept in sync so the page never flashes the wrong theme before JS reads the user's saved choice from localStorage.",
      },
      {
        fi: "Kaksikielisyys (fi/en) omalla LanguageContextilla ilman ulkopuolista i18n-kirjastoa. Kielivalinta vaikuttaa vain selaimessa renderöityyn sisältöön; palvelimen tuottama metadata pysyy aina suomeksi, jotta hakukoneet ja some-jakojen esikatselut näkevät johdonmukaisen version.",
        en: "Bilingual support (Finnish/English) with a custom LanguageContext, no external i18n library. The language choice only affects content rendered in the browser; server-rendered metadata stays in Finnish, so search engines and social-share previews always see a consistent version.",
      },
      {
        fi: "Projektidata on tiedostopohjaista: jokainen projekti on oma JS-moduulinsa (otsikko, kuvaus, teknologiat, mahdollinen tekninen syväsukellus). Ei erillistä tietokantaa tai CMS:ää, mikä riittää hyvin pienelle, harvoin muuttuvalle sisällölle.",
        en: "Project data is file-based: each project is its own JS module (title, summary, technologies, and an optional technical deep dive). No separate database or CMS, which is enough for a small set of content that rarely changes.",
      },
      {
        fi: "Erillinen lab-osio sisältää tekoälyagentti-demon (ks. Data-analyysiagentti-projekti): Next.js API route, Claude API tool use -tuella ja SQLite-tietokanta, jota suojaa read-only-yhteys ja kyselyiden sisällön tarkistus.",
        en: "A separate lab section hosts an AI-agent demo (see the Data analyst agent project): a Next.js API route, the Claude API with tool use, and a SQLite database protected by a read-only connection and query-content validation.",
      },
      {
        fi: "Julkaisu: GitHub-repo on yhdistetty Vercel-projektiin, joka buildaa ja vie tuotantoon automaattisesti jokaisen git pushin jälkeen. Kävijäseuranta hoidetaan Vercel Analyticsilla, joka ei käytä evästeitä eikä siksi vaadi suostumusbanneria.",
        en: "Deployment: the GitHub repo is connected to a Vercel project that builds and ships to production automatically on every git push. Visitor tracking runs on Vercel Analytics, which is cookieless and needs no consent banner.",
      },
      {
        fi: "Käytin Claude AI:ta työparina koko prosessin ajan: koodikatselmointiin ja bugien etsimiseen, sisällön kirjoittamiseen ja hiomiseen, sekä koko julkaisuputken (GitHub → Vercel) pystyttämiseen ensimmäistä kertaa.",
        en: "I used Claude AI as a working partner throughout: for code review and bug hunting, for writing and refining content, and for setting up the entire release pipeline (GitHub → Vercel) for the first time.",
      },
    ],
    architectureReasoning: {
      fi: "Valitsin tiedostopohjaisen datan erillisen tietokannan tai CMS:n sijaan, koska projekteja on vähän eikä sisältö muutu usein: ylimääräinen infrastruktuuri ei olisi tuonut mitään hyötyä, vain lisää ylläpidettävää. Palvelimen ja clientin teema-/kielioletukset on pidetty tarkoituksella synkassa, koska pienikin väläys ennen hydraatiota näkyisi heti epäammattimaiselta juuri sillä sivulla, jonka on tarkoitus näyttää tekemisen laatua. Vercel valikoitui hostiksi, koska se on rakennettu juuri Next.js:ää varten: yksi git push riittää koko julkaisuun, eikä palvelimia tarvitse hallita erikseen.",
      en: "I chose file-based data over a separate database or CMS because there are few projects and the content rarely changes: extra infrastructure would only add upkeep, not value. The server and client theme/language defaults are deliberately kept in sync, because even a small flash before hydration would look unpolished on exactly the page meant to demonstrate the quality of the work. Vercel was the natural host because it's built specifically for Next.js: a single git push is enough to ship, with no servers to manage separately.",
    },
    resultPoints: [
      {
        fi: "Koko sivusto ja sen julkaisuputki (GitHub → Vercel, automaattinen deploy) on viety tuotantoon alusta loppuun itse, ensimmäistä kertaa.",
        en: "The entire site and its release pipeline (GitHub → Vercel, automatic deploys) were taken to production end to end, for the first time.",
      },
      {
        fi: "Sivu on täysin kaksikielinen ja tukee tummaa/vaaleaa teemaa ilman väläyksiä ennen sisällön latautumista.",
        en: "The site is fully bilingual and supports dark/light theme with no flash before content loads.",
      },
      {
        fi: "10 projektia 12:sta generoidaan staattisina yksityiskohtasivuina build-aikana; loput näkyvät listauksessa ilman erillistä sivua.",
        en: "10 of 12 projects are statically generated as detail pages at build time; the rest appear in the listing without a separate page.",
      },
      {
        fi: "Kävijädata kertyy tuotannossa Vercel Analyticsin kautta ilman evästeitä.",
        en: "Visitor data is collected in production through Vercel Analytics, with no cookies involved.",
      },
    ],
    reflection: {
      fi: "Jatkokehityksenä voisin hankkia oman verkkotunnuksen nykyisen vercel.app-osoitteen sijaan, viimeistellä hakukoneoptimoinnin (mm. Google Search Consoleen rekisteröinnin) ja lisätä kevyen sisällönhallinnan, jos projektien määrä kasvaisi niin paljon, ettei tiedostopohjainen data enää riittäisi.",
      en: "As a next step, I could get a custom domain instead of the current vercel.app address, finish SEO details such as registering with Google Search Console, and add lightweight content management if the number of projects grows enough that file-based data stops being practical.",
    },
    images: [],
    video: null,
    pdf: null,
  },
};
