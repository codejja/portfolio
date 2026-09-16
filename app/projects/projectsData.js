// Yhteinen projektidata: käytetään sekä /projects-listauksessa
// että yksittäisten projektien /projects/[slug]-sivuilla.

export const projects = [
  {
    slug: "portfolio-sivusto",
    category: "web",
    title: { fi: "Portfolio-sivusto", en: "Portfolio website" },
    status: { fi: "Valmis / kehityksessä", en: "Complete / in progress" },
    summary: {
      fi: "Oma portfolio-sivustoni, jonka tarkoitus on esitellä osaamistani, projektejani ja taustaani työnhakua varten.",
      en: "My own portfolio website, built to showcase my skills, projects, and background for my job search.",
    },
    technologies: ["Next.js", "React", "Tailwind CSS"],
    githubUrl: "https://github.com/codejja/portfolio26",
    liveUrl: "#",
    hasDetail: false,
  },
  {
    slug: "data-factory",
    category: "data-cloud",
    title: {
      fi: "Data-integraatioputki Azure Data Factorylla",
      en: "Data integration pipeline with Azure Data Factory",
    },
    status: { fi: "Kurssiprojekti", en: "Course project" },
    summary: {
      fi: "Rakensin kurssiprojektina data-integraatioputken Azure Data Factorylla: automaattisen kopioinnin Blob Storagesta SQL-tietokantaan sekä datan suodatuksen ja aggregoinnin mapping data flow'lla.",
      en: "Built a data integration pipeline as a course project using Azure Data Factory: automated copying from Blob Storage to SQL Database, plus data filtering and aggregation with a mapping data flow.",
    },
    technologies: ["Azure Data Factory", "Azure SQL Database", "Data Lake Storage", "Mapping Data Flows"],
    githubUrl: "#",
    liveUrl: "#",
    hasDetail: true,
    detail: {
      problem: {
        fi: "Tavoitteena oli rakentaa Azure-ympäristöön käytännöllinen data-integraatioprosessi: siirtää dataa automaattisesti lähteestä kohteeseen ja muokata sitä matkalla käyttökelpoiseksi raportointia ja analytiikkaa varten. Harjoitus kattoi kaksi tyypillistä data-alustan perustarvetta: toistuvan, ajastetun datansiirron sekä datan suodatuksen ja aggregoinnin ennen tallennusta.",
        en: "The goal was to build a practical data integration process in Azure: automatically move data from source to destination and shape it along the way for reporting and analytics. The exercise covered two common data-platform needs: recurring, scheduled data transfer, and filtering/aggregating data before it's stored.",
      },
      architectureIntro: {
        fi: "Ratkaisu rakennettiin Azure Data Factoryn ympärille kahdessa osassa:",
        en: "The solution was built around Azure Data Factory in two parts:",
      },
      architecturePoints: [
        {
          fi: "Copy Pipeline: data kopioidaan Azure Blob Storagesta Azure SQL Databaseen, ajastettuna toistumaan automaattisesti ilman manuaalista käynnistystä.",
          en: "Copy Pipeline: data is copied from Azure Blob Storage to Azure SQL Database, scheduled to run automatically without manual triggering.",
        },
        {
          fi: "Mapping Data Flow: data luetaan Azure Data Lake Storage Gen2:sta, suodatetaan (vuosiluku ja genre) ja aggregoidaan (keskiarvoluokitus vuosittain) ennen tallennusta kohteeseen.",
          en: "Mapping Data Flow: data is read from Azure Data Lake Storage Gen2, filtered (by year and genre) and aggregated (yearly average rating) before being written to the destination.",
        },
      ],
      architectureReasoning: {
        fi: "Valitsin Mapping Data Flow'n pelkän kopiointiaktiviteetin sijaan, koska data piti suodattaa ja aggregoida ennen tallennusta. Suora kopiointi ei olisi riittänyt. Ajastetun triggerin taustalla oli ajatus, että toistuva datansiirto kannattaa automatisoida sen sijaan että se käynnistettäisiin manuaalisesti joka kerta.",
        en: "I chose a Mapping Data Flow over a plain copy activity because the data needed to be filtered and aggregated before storage. A straight copy wouldn't have been enough. The scheduled trigger reflected the idea that a recurring data transfer is worth automating rather than kicking it off manually every time.",
      },
      resultPoints: [
        {
          fi: "Copy-pipeline validoitiin ja ajettiin onnistuneesti: data siirtyi oikein Blob Storagesta SQL-tietokantaan.",
          en: "The copy pipeline was validated and ran successfully: data moved correctly from Blob Storage to the SQL database.",
        },
        {
          fi: "Ajastettu triggeri ajoi putken toistuvasti ilman manuaalista käynnistystä, ja kaikki ajot onnistuivat.",
          en: "A scheduled trigger ran the pipeline repeatedly without manual intervention, and every run succeeded.",
        },
        {
          fi: "Mapping data flow suodatti ja aggregoi elokuva-datasetin oikein genren ja vuosiluvun perusteella; tulos tarkistettiin data preview -näkymässä ennen ajon suorittamista.",
          en: "The mapping data flow correctly filtered and aggregated the movie dataset by genre and year; the result was verified in the data preview before running.",
        },
      ],
      reflection: {
        fi: "Jatkokehityksenä ratkaisua voisi laajentaa virheenkäsittelyllä, lokituksella ja monitoroinnilla, datan laadun tarkistuksilla ennen tallennusta sekä useamman datalähteen yhdistämisellä.",
        en: "As a next step, the solution could be extended with error handling, logging and monitoring, data quality checks before storage, and combining multiple data sources.",
      },
      images: [
        { src: "/images/projects/data-factory/00-architecture.jpg", alt: { fi: "Ratkaisun arkkitehtuurikaavio", en: "Solution architecture diagram" } },
        { src: "/images/projects/data-factory/01-copy-pipeline.jpg", alt: { fi: "Copy-pipeline Azure Data Factoryssä", en: "Copy pipeline in Azure Data Factory" } },
        { src: "/images/projects/data-factory/02-data-flow.jpg", alt: { fi: "Mapping data flow: suodatus ja aggregointi", en: "Mapping data flow: filter and aggregate" } },
        { src: "/images/projects/data-factory/03-run-result.jpg", alt: { fi: "Onnistunut pipeline-ajo ja suorituskykytiedot", en: "Successful pipeline run and performance details" } },
        { src: "/images/projects/data-factory/04-filtered-data.jpg", alt: { fi: "Suodatettu data data preview -näkymässä", en: "Filtered data in the data preview" } },
      ],
      video: null,
      pdf: "/files/data-factory-case-study.pdf",
    },
  },
  {
    slug: "social-media-analyser",
    category: "data-cloud",
    title: {
      fi: "Sentimenttianalyysi Viva Engage -julkaisuista",
      en: "Sentiment analysis of Viva Engage posts",
    },
    status: { fi: "Kurssiprojekti", en: "Course project" },
    summary: {
      fi: "Automaattinen Logic App -ratkaisu, joka herää uudesta Viva Engage -viestistä, ajaa sille sentimenttianalyysin ja tallentaa tuloksen Azure SQL -kantaan. Tulokset visualisoitu Power BI -raportissa.",
      en: "An automated Logic App solution that triggers on a new Viva Engage message, runs sentiment analysis on it, and stores the result in an Azure SQL database. Results are visualized in a Power BI report.",
    },
    technologies: ["Azure Logic Apps", "Sentiment Analysis (AI)", "Azure SQL Database", "Power BI"],
    githubUrl: "#",
    liveUrl: "#",
    hasDetail: true,
    detail: {
      problem: {
        fi: "Tavoitteena oli automatisoida projektitiimin Viva Engage -kanavaan tulevan palautteen analysointi: sen sijaan että viestejä luetaan manuaalisesti, ratkaisu tunnistaa jokaisen uuden viestin sentimentin (positiivinen / neutraali / negatiivinen) automaattisesti ja kokoaa tuloksista raportin.",
        en: "The goal was to automate the analysis of feedback posted to the project team's Viva Engage channel: instead of reading messages manually, the solution automatically detects the sentiment (positive / neutral / negative) of every new message and compiles the results into a report.",
      },
      architectureIntro: {
        fi: "Ratkaisu on tapahtumaohjattu Logic App -automaatio:",
        en: "The solution is an event-driven Logic App automation:",
      },
      architecturePoints: [
        {
          fi: "Trigger: Logic App herää automaattisesti, kun Viva Engage -ryhmään tulee uusi viesti.",
          en: "Trigger: the Logic App wakes up automatically whenever a new message appears in the Viva Engage group.",
        },
        {
          fi: "Sentimenttianalyysi: jokaiselle viestille ajetaan asynkroninen sentimenttianalyysi (For each -silmukassa).",
          en: "Sentiment analysis: each message runs through an asynchronous sentiment-analysis step (inside a For each loop).",
        },
        {
          fi: "Tallennus ja raportointi: tulos (viesti + sentimentti) tallennetaan Azure SQL -kantaan, josta Power BI hakee datan raporttiin.",
          en: "Storage and reporting: the result (message + sentiment) is written to an Azure SQL database, which Power BI reads for the report.",
        },
      ],
      architectureReasoning: {
        fi: "Toteutin ratkaisun tapahtumaohjattuna (herätys uudesta viestistä) sen sijaan että sentimenttianalyysi ajettaisiin erillisenä eräajona, jolloin tulos pysyy ajan tasalla ilman erillistä ajastusta. Tulosten tallentaminen Azure SQL -kantaan pelkän kertaraportin sijaan mahdollisti sen, että Power BI voi raportoida koko historian ja näkymä päivittyy sitä mukaa kun uusia viestejä tulee.",
        en: "I built the solution as event-driven (triggered by each new message) rather than as a separate batch job, so the result stays current without a separate schedule. Storing results in an Azure SQL database instead of a one-off report meant Power BI could report on the full history, with the view updating as new messages came in.",
      },
      resultPoints: [
        {
          fi: "100 julkaisua analysoitiin automaattisesti ilman manuaalista työtä. Sentimentit jakautuivat tasaisesti: 34 % positiivista, 33 % negatiivista, 33 % neutraalia.",
          en: "100 posts were analyzed automatically with no manual work. Sentiment was evenly split: 34% positive, 33% negative, 33% neutral.",
        },
        {
          fi: "Power BI -raportti kokoaa jakauman, viestimäärän ja koko viestilistan sentimenteittäin yhteen näkymään.",
          en: "The Power BI report brings the distribution, message count, and the full list of messages with their sentiments into a single view.",
        },
        {
          fi: "Tasainen jakauma tulkittiin merkiksi siitä, että projekti on edennyt tasapainoisesti, mutta kehityskohteita on edelleen tunnistettavissa.",
          en: "The even distribution was interpreted as a sign that the project progressed in a balanced way, while still leaving clear areas for improvement.",
        },
      ],
      reflection: null,
      images: [
        { src: "/images/projects/social-media-analyser/01-logic-app.jpg", alt: { fi: "Logic App: trigger, sentimenttianalyysi ja tallennus", en: "Logic App: trigger, sentiment analysis and storage" } },
        { src: "/images/projects/social-media-analyser/02-sql-data.jpg", alt: { fi: "Tallennettu data Azure SQL -kannassa", en: "Stored data in the Azure SQL database" } },
        { src: "/images/projects/social-media-analyser/03-dashboard.jpg", alt: { fi: "Sentimenttianalyysin Power BI -raportti", en: "Sentiment analysis Power BI report" } },
        { src: "/images/projects/social-media-analyser/04-dashboard-detail.jpg", alt: { fi: "Julkaisujen sisältö ja sentimentti listattuna", en: "Post content and sentiment listed" } },
      ],
      video: "/videos/social-media-analyser-full.mp4",
      videoDuration: "2:42",
      pdf: null,
    },
  },

  {
    slug: "power-bi-azure-sql",
    category: "data-cloud",
    title: {
      fi: "Datankeruujärjestelmä ja Power BI -raportointi",
      en: "Data collection system and Power BI reporting",
    },
    status: { fi: "Itsenäinen lopputyö", en: "Independent final project" },
    summary: {
      fi: "Rakensin itsenäisenä lopputyönä datankeruujärjestelmän, yhdistin Power BI:n Azure SQL -tietokantaan, tein eksploratiivista data-analyysia ja loin Power BI -raportteja ja visualisointeja.",
      en: "Built a data collection system as an independent final project, connected Power BI to an Azure SQL database, performed exploratory data analysis, and created Power BI reports and visualizations.",
    },
    technologies: ["Power BI", "Azure SQL Database", "Data Analysis", "DAX"],
    githubUrl: "#",
    liveUrl: "#",
    hasDetail: true,
    detail: {
      problem: {
        fi: "Tavoitteena oli rakentaa itsenäinen datankeruu- ja raportointiratkaisu alusta loppuun: tuoda laaja elokuva-aineisto Azure SQL -tietokantaan ja tehdä siitä eksploratiivinen analyysi, joka vastaa kysymyksiin kuten mitkä elokuvat ja genret nousevat esiin arvosanojen ja äänimäärien perusteella, ja miten julkaisuvuosi vaikuttaa suosioon.",
        en: "The goal was to build an independent data collection and reporting solution end to end: load a large movie dataset into an Azure SQL database and run an exploratory analysis answering questions like which movies and genres stand out by rating and vote count, and how release year affects popularity.",
      },
      architectureIntro: {
        fi: "Data tallennettiin Azure SQL Databaseen, ja Power BI yhdistettiin siihen suoraan tietolähteenä. Raportointi jaettiin kahteen näkymään:",
        en: "Data was stored in Azure SQL Database, with Power BI connected directly as the data source. Reporting was split into two views:",
      },
      architecturePoints: [
        {
          fi: "Movie Analytics Dashboard, yleiskatsaus: parhaiten arvioidut elokuvat, äänestysmäärät, julkaisuvuosien jakauma ja genrejakauma.",
          en: "Movie Analytics Dashboard, an overview: top-rated movies, vote counts, release-year distribution, and genre breakdown.",
        },
        {
          fi: "Exploratory Data Analysis: syventävä näkymä interaktiivisella vuosilukusliderillä, genrekohtaisilla keskiarvoilla sekä äänimäärän ja arvosanan välisellä hajontakuviolla.",
          en: "Exploratory Data Analysis: a deeper view with an interactive release-year slicer, average ratings by genre, and a scatter plot of votes versus rating.",
        },
      ],
      architectureReasoning: {
        fi: "Valitsin Azure SQL Databasen tallennuspaikaksi Excel- tai CSV-tiedoston sijaan, koska aineisto oli laaja ja sen piti olla kyselyillä suodatettavissa suoraan Power BI:stä. Jaoin raportoinnin kahteen näkymään, koska yleiskatsaus ja syventävä analyysi palvelevat eri tarkoitusta: ensin nopea kokonaiskuva, sitten mahdollisuus porautua tarkemmin esimerkiksi genren tai julkaisuvuoden mukaan.",
        en: "I chose Azure SQL Database over an Excel or CSV file for storage because the dataset was large and needed to be queryable directly from Power BI. I split the reporting into two views because an overview and a deeper analysis serve different purposes: first a quick overall picture, then the ability to drill down by genre or release year.",
      },
      resultPoints: [
        {
          fi: "Kaksi täysin interaktiivista Power BI -raporttia, joissa suodattimet ja slicerit päivittävät kaikki visualisoinnit reaaliajassa.",
          en: "Two fully interactive Power BI reports where filters and slicers update every visual in real time.",
        },
        {
          fi: "Hajontakuvio paljasti selvän yhteyden äänimäärän ja arvosanan välillä: suositummat elokuvat saavat keskimäärin korkeampia arvosanoja.",
          en: "The scatter plot revealed a clear relationship between vote count and rating: more popular movies tend to score higher on average.",
        },
        {
          fi: "Genrekohtainen vertailu nosti esiin selkeitä eroja: esim. draama- ja dokumenttielokuvat pärjäävät keskimäärin paremmin kuin toiminta- ja kauhuelokuvat.",
          en: "The genre comparison highlighted clear differences: drama and documentary titles, for example, score better on average than action and horror titles.",
        },
      ],
      reflection: null,
      images: [
        { src: "/images/projects/power-bi-azure-sql/01-movie-dashboard.jpg", alt: { fi: "Movie Analytics Dashboard -yleiskatsaus", en: "Movie Analytics Dashboard overview" } },
        { src: "/images/projects/power-bi-azure-sql/02-movie-dashboard-detail.jpg", alt: { fi: "Dashboardin visualisoinnit lähempää", en: "Dashboard visuals in detail" } },
        { src: "/images/projects/power-bi-azure-sql/03-eda-overview.jpg", alt: { fi: "Exploratory Data Analysis -näkymä ja vuosilukuslicer", en: "Exploratory Data Analysis view with release-year slicer" } },
        { src: "/images/projects/power-bi-azure-sql/04-eda-detail.jpg", alt: { fi: "Genrevertailu ja äänimäärä/arvosana-hajontakuvio", en: "Genre comparison and votes/rating scatter plot" } },
      ],
      video: "/videos/power-bi-azure-sql-full.mp4",
      videoDuration: "7:10",
      pdf: null,
    },
  },
  {
    slug: "tyollisyys-powerbi",
    category: "data-cloud",
    title: {
      fi: "Pääkaupunkiseudun työllisyysraportti",
      en: "Helsinki metro area employment report",
    },
    status: { fi: "Kurssiprojekti", en: "Course project" },
    summary: {
      fi: "Rakensin Power BI -raportin pääkaupunkiseudun työllisyystilanteesta avoimen datan pohjalta (07/2022-07/2025), tuoden työttömyysasteen, avointen työpaikkojen ja työvoiman kehityksen samaan näkymään.",
      en: "Built a Power BI report on the Helsinki metro area's employment situation using open public data (07/2022-07/2025), bringing unemployment rate, open positions, and workforce trends into one view.",
    },
    technologies: ["Power BI", "Power Query", "Avoin data (avoindata.fi)", "DAX"],
    githubUrl: "#",
    liveUrl: "#",
    hasDetail: true,
    detail: {
      problem: {
        fi: "Halusin harjoitella Power BI:n käyttöä ajankohtaisella ja itselleni merkityksellisellä aiheella. Työskentelen Kelassa työttömyysetuuksien parissa, joten pääkaupunkiseudun työllisyyskehitys kiinnosti sekä työn että yleisen keskustelun vuoksi, jossa on puhuttu kasvavasta työttömyydestä ja vähenevistä avoimista työpaikoista. Tavoitteena oli löytää luotettava avoin datalähde ja koota siitä selkeä, loppukäyttäjäystävällinen raportti.",
        en: "I wanted to practice Power BI on a topic that was both current and personally relevant. I work with unemployment benefits at Kela, so employment trends in the Helsinki metro area interested me both professionally and because of the wider public conversation around rising unemployment and shrinking numbers of open positions. The goal was to find a reliable open data source and turn it into a clear, end-user-friendly report.",
      },
      architectureIntro: {
        fi: "Data haettiin avoindata.fi:n kautta Helsingin seudun avoimista tilastotietokannoista (stat.hel.fi), alkuperäisenä lähteenä KEHA-keskuksen työnvälitystilasto ja Tilastokeskuksen StatFin-tietokanta:",
        en: "The data was sourced via avoindata.fi from the Helsinki Region's open statistical databases (stat.hel.fi), originating from the KEHA Centre's employment service statistics and Statistics Finland's StatFin database:",
      },
      architecturePoints: [
        {
          fi: "Datan haku ja rajaus: valitsin muuttujat (tiedot, aikajakso, alue) tilastotietokantapalvelussa ja latasin aineiston Excel-muodossa ajalta 07/2022-07/2025.",
          en: "Data retrieval and scoping: I selected the variables (data, time period, region) in the statistics database service and downloaded the dataset as Excel covering 07/2022-07/2025.",
        },
        {
          fi: "Power Query -siivous: poistin turhan Pääkaupunkiseutu-sarakkeen ja muunsin tekstimuotoiset kuukaudet (esim. 2022M07) päivämäärämuotoon, jotta aikasarjakaaviot piirtyivät oikein.",
          en: "Power Query cleanup: I removed a redundant column and converted the text-formatted months (e.g. 2022M07) into proper dates so the time-series charts would plot correctly.",
        },
        {
          fi: "Raportointi: rakensin neljä vuosikohtaista KPI-korttia sekä kolme kaaviota (avoimet työpaikat, työttömät työnhakijat, työttömyysaste), jotka yhdessä kertovat pääkaupunkiseudun työllisyyden kehityksestä.",
          en: "Reporting: I built four year-by-year KPI cards plus three charts (open positions, unemployed job seekers, unemployment rate) that together tell the story of employment trends in the Helsinki metro area.",
        },
      ],
      architectureReasoning: {
        fi: "Käytin mediaania keskiarvon sijaan vuosittaisissa työvoimakorteissa, koska se antaa vakaamman, kuukausivaihtelulle vähemmän herkän kuvan vuoden tyypillisestä työvoiman määrästä. Rajasin jokaisen kortin omalla vuosisuodattimella, jotta neljä lukua olisi suoraan vertailtavissa keskenään.",
        en: "I used the median rather than the average on the yearly workforce cards, since it gives a more stable picture of a year's typical workforce size that's less sensitive to monthly fluctuation. I filtered each card to its own year so the four figures could be compared directly side by side.",
      },
      resultPoints: [
        {
          fi: "Avointen työpaikkojen määrä on laskenut jyrkästi vuodesta 2022 lähtien, kun taas työttömien työnhakijoiden määrä on kasvanut tasaisesti joka vuosi.",
          en: "The number of open positions has dropped sharply since 2022, while the number of unemployed job seekers has risen steadily every year.",
        },
        {
          fi: "Työttömyysaste on noussut noin 9,4 %:sta yli 13,7 %:iin tarkastelujakson aikana, eikä nousulle ole vielä näkyvissä loppua.",
          en: "The unemployment rate rose from around 9.4% to over 13.7% over the period, with no clear end to the increase yet in sight.",
        },
        {
          fi: "Työvoiman kokonaismäärä on kasvanut tasaisesti (633K-668K), mikä selittyy osin muuttoliikenteellä pääkaupunkiseudulle ja sen kehyskuntiin.",
          en: "The total workforce grew steadily (633K to 668K), partly explained by migration into the Helsinki metro area and its surrounding municipalities.",
        },
      ],
      reflection: {
        fi: "Jatkokehityksenä raporttia voisi laajentaa vertailemalla pääkaupunkiseutua muuhun Suomeen, tai lisäämällä ennusteen työttömyysasteen kehityksestä.",
        en: "As a next step, the report could be extended by comparing the Helsinki metro area to the rest of Finland, or by adding a forecast of how the unemployment rate might develop.",
      },
      images: [
        { src: "/images/projects/tyollisyys-powerbi/01-raportti.jpg", alt: { fi: "Pääkaupunkiseudun työllisyysraportti Power BI:ssä", en: "Helsinki metro area employment report in Power BI" } },
      ],
      video: null,
      pdf: null,
    },
  },
  {
    slug: "puutarha-yritys",
    category: "web",
    title: { fi: "Puutarha-alan yrityksen verkkosivut", en: "Landscaping company website" },
    status: { fi: "Asiakasprojekti", en: "Client project" },
    summary: {
      fi: "Suunnittelin ja toteutin verkkosivuston turkulaiselle viherrakennusyritykselle. Sivusto sisältää dynaamisia palvelusivuja CMS:n avulla, ennen/jälkeen-kuvavertailijan, asiakasarvosteluja ja täysin responsiivisen toteutuksen.",
      en: "Designed and built a website for a landscaping company based in Turku, Finland. The site includes dynamic service pages powered by a CMS, a before/after image comparison slider, customer reviews, and a fully responsive layout.",
    },
    technologies: ["Webflow", "CMS", "Responsive Design"],
    githubUrl: "#",
    liveUrl: "#",
    hasDetail: false,
  },
  {
    slug: "power-automate-hyvaksynta",
    category: "data-cloud",
    title: { fi: "Hyväksyntätyönkulku Power Automatella", en: "Approval workflow with Power Automate" },
    status: { fi: "Kurssiprojekti", en: "Course project" },
    summary: {
      fi: "Toteutin Power Automatella SharePoint-listaan liitetyn hyväksyntätyönkulun: esimiehen sähköpostihyväksyntä/-hylkäys, automaattiset tilapäivitykset ja ilmoitukset. Kirjoitin prosessista myös kuvitetun step-by-step-teknisen ohjeistuksen.",
      en: "Built an approval workflow in Power Automate connected to a SharePoint list: manager email approval/rejection, automatic status updates, and notifications. Also wrote an illustrated step-by-step technical guide for the process.",
    },
    technologies: ["Power Automate", "SharePoint", "Prosessiautomaatio"],
    githubUrl: "#",
    liveUrl: "#",
    hasDetail: true,
    detail: {
      problem: {
        fi: "Tavoitteena oli automatisoida matkustuslupien anominen ja hyväksyntä: sen sijaan että esimies käsittelisi pyynnöt manuaalisesti sähköpostitse tai käytävällä, ratkaisu vie pyynnön suoraan esimiehen sähköpostiin hyväksyttäväksi tai hylättäväksi, ja päivittää tilanteen automaattisesti SharePoint-listalle.",
        en: "The goal was to automate travel-permit requests and approvals: instead of a manager handling requests manually by email or in person, the solution routes each request straight to the manager's inbox to approve or reject, and automatically updates the status on the SharePoint list.",
      },
      architectureIntro: {
        fi: "Ratkaisu rakennettiin SharePoint-listan ja Power Automate -pilvityönkulun varaan:",
        en: "The solution was built on a SharePoint list and a Power Automate cloud flow:",
      },
      architecturePoints: [
        {
          fi: "SharePoint-lista \"Matkustusluvat\" tallentaa hakemuksen tiedot: määränpää, arvioitu hinta, esimies, matkan kesto, pyynnön esittäjä, yksikkö ja status.",
          en: "The \"Matkustusluvat\" (travel permits) SharePoint list stores each request's details: destination, estimated cost, manager, trip dates, requester, unit, and status.",
        },
        {
          fi: "Flow käynnistyy automaattisesti uudesta listarivistä (\"When an item is created\"), hakee hakijan profiilitiedot ja käynnistää hyväksyntäpyynnön (\"Start and wait for an approval\") esimiehen sähköpostiin Approve/Reject-painikkeilla.",
          en: "The flow triggers automatically on a new list row (\"When an item is created\"), fetches the requester's profile info, and starts an approval request (\"Start and wait for an approval\") emailed to the manager with Approve/Reject buttons.",
        },
        {
          fi: "Esimiehen vastauksen mukaan Condition-haara valitsee polun: hyväksytty-polku lähettää vahvistussähköpostin ja päivittää statuksen \"Hyväksytty\", hylätty-polku lähettää pahoittelut ja syyn sekä päivittää statuksen \"Hylätty\".",
          en: "Based on the manager's response, a Condition branch picks the path: the approved branch sends a confirmation email and sets the status to \"Hyväksytty\" (approved), the rejected branch sends an apology with the stated reason and sets the status to \"Hylätty\" (rejected).",
        },
      ],
      architectureReasoning: {
        fi: "Käytin \"Start and wait for an approval\" -toimintoa erillisen manuaalisen seurannan sijaan, koska se pysäyttää flown odottamaan esimiehen vastausta ja tuo vastauksen suoraan seuraavaan Condition-vaiheeseen käsiteltäväksi. Statuksen päivitys samaan SharePoint-listaan (Update item) pitää koko historian yhdessä paikassa, jolloin kuka tahansa näkee hakemuksen tilan avaamatta sähköposteja.",
        en: "I used \"Start and wait for an approval\" instead of tracking things manually, since it pauses the flow until the manager responds and feeds that response straight into the next Condition step. Updating status on the same SharePoint list (Update item) keeps the whole history in one place, so anyone can see a request's state without digging through email.",
      },
      resultPoints: [
        {
          fi: "Testatut hyväksyntä- ja hylkäyspolut toimivat molemmat odotetusti: hyväksytty hakemus sai vahvistusviestin ja statuksen \"Hyväksytty\", hylätty sai perustellun kieltäytymisviestin ja statuksen \"Hylätty\".",
          en: "Both tested paths worked as expected: an approved request got a confirmation message and the \"Hyväksytty\" status, a rejected one got a reasoned decline message and the \"Hylätty\" status.",
        },
        {
          fi: "SharePoint-listalla näkyy reaaliajassa jokaisen hakemuksen tila (odottaa hyväksyntää / hyväksytty / hylätty) yhdessä näkymässä.",
          en: "The SharePoint list shows every request's status (pending / approved / rejected) in real time in a single view.",
        },
        {
          fi: "Prosessista syntyi myös kuvitettu step-by-step-tekninen ohjeistus, joka kattaa koko toteutuksen listan luonnista flown rakentamiseen ja tiimisivuston jäsenten hallintaan.",
          en: "The process also produced an illustrated step-by-step technical guide covering the whole build, from creating the list to building the flow to managing team-site members.",
        },
      ],
      reflection: {
        fi: "Jatkokehityksenä flow'hun voisi lisätä eskaloinnin, jos esimies ei vastaa määräajassa, sekä useamman hyväksyntätason isommille matkakuluille.",
        en: "As a next step, the flow could add escalation if the manager doesn't respond within a deadline, and multiple approval levels for larger travel costs.",
      },
      images: [
        { src: "/images/projects/power-automate-hyvaksynta/01-lista-ja-sarakkeet.jpg", alt: { fi: "SharePoint-listan \"Matkustusluvat\" sarakkeet", en: "The \"Matkustusluvat\" SharePoint list's columns" } },
        { src: "/images/projects/power-automate-hyvaksynta/02-hyvaksyntavaihe.jpg", alt: { fi: "\"Start and wait for an approval\" -vaiheen asetukset", en: "The \"Start and wait for an approval\" step's configuration" } },
        { src: "/images/projects/power-automate-hyvaksynta/03-flown-kokonaisuus.jpg", alt: { fi: "Koko flow: trigger, hyväksyntä, ehto ja molemmat haarat", en: "The full flow: trigger, approval, condition, and both branches" } },
        { src: "/images/projects/power-automate-hyvaksynta/04-hyvaksyntasahkoposti.jpg", alt: { fi: "Esimiehelle lähtevä hyväksyntäsähköposti Approve/Reject-painikkeilla", en: "The approval email sent to the manager with Approve/Reject buttons" } },
        { src: "/images/projects/power-automate-hyvaksynta/05-tulokset-sharepoint.jpg", alt: { fi: "SharePoint-lista eri tiloissa olevine hakemuksineen", en: "The SharePoint list with requests in different statuses" } },
      ],
      video: null,
      pdf: "/files/power-automate-hyvaksynta-ohje.pdf",
    },
  },
  {
    slug: "bensis",
    category: "ui-ux",
    title: {
      fi: "Bensis – bensa-automaatin käyttöliittymä",
      en: "Bensis – fuel station kiosk interface",
    },
    status: { fi: "Kurssiprojekti", en: "Course project" },
    summary: {
      fi: "Käyttöliittymän suunnittelu -kurssin projektina toteutin JavaFX-työpöytäsovelluksen, joka simuloi bensa-automaatin tankkausprosessia: polttoainemäärän syöttö, hinnan laskenta reaaliajassa ja PIN-koodilla suojattu maksu.",
      en: "Built as a project for the UI Design course, a JavaFX desktop application simulating a self-service fuel station kiosk: entering the fuel amount, calculating the price in real time, and PIN-protected payment.",
    },
    technologies: ["Java", "JavaFX", "Scene Builder", "Tiedostopohjainen tallennus"],
    githubUrl: "#",
    liveUrl: "#",
    hasDetail: true,
    detail: {
      problem: {
        fi: "Tavoitteena oli suunnitella ja toteuttaa käyttöliittymä, joka jäljittelee oikean bensa-automaatin tankkauskokemusta alusta loppuun: asiakas syöttää tankattavan litramäärän, näkee hinnan reaaliajassa polttoainelajeittain (95E, 98E, Diesel) ja vahvistaa maksun PIN-koodilla. Käyttöliittymän piti olla selkeä ja looginen käyttää ilman erillistä opastusta.",
        en: "The goal was to design and build a user interface that mirrors the real experience of using a self-service fuel pump end to end: the customer enters the amount of fuel to buy, sees the price update in real time by fuel type (95E, 98E, Diesel), and confirms payment with a PIN code. The interface had to be clear and intuitive enough to use without any instructions.",
      },
      architectureIntro: {
        fi: "Sovellus rakennettiin JavaFX:llä ja Scene Builderilla, data tallennettiin tekstitiedostoihin:",
        en: "The app was built with JavaFX and Scene Builder, with data stored in plain text files:",
      },
      architecturePoints: [
        {
          fi: "Käyttöliittymä: Scene Builderilla suunniteltu mittaristonäkymä, jossa litramäärä, hinnat polttoainelajeittain ja summa päivittyvät reaaliaikaisesti useamman controller-luokan kautta (BensisDisplayController, BensisTolppaController, priceWindowController).",
          en: "Interface: a pump-display view designed in Scene Builder, where the entered fuel amount, per-type prices, and total update in real time through several controller classes (BensisDisplayController, BensisTolppaController, priceWindowController).",
        },
        {
          fi: "Maksu ja tunnistautuminen: PIN-koodi tarkistetaan vertaamalla sitä tiedostoon tallennettuun hajautusarvoon plain-tekstin sijaan, ja maksu käsitellään erillisessä BankController-luokassa.",
          en: "Payment and authentication: the PIN is verified against a hashed value stored in a file rather than plain text, with payment handled by a separate BankController class.",
        },
        {
          fi: "Tietojen tallennus: hinnat, tankkitasot, tilaushistoria ja mainokset luetaan ja kirjoitetaan erillisiin tekstitiedostoihin, joten jokainen tankkaus jää historiaan aikaleimalla.",
          en: "Data storage: prices, tank levels, order history, and ads are read from and written to separate text files, so every fill-up is logged with a timestamp.",
        },
      ],
      architectureReasoning: {
        fi: "Valitsin PIN:n tallentamisen hajautettuna plain-tekstin sijaan, koska tunnistautumistietoa ei kuulu koskaan tallentaa selväkielisenä, ei edes harjoitustyössä. Tekstitiedostot riittivät datan tallennukseen kurssin laajuudessa: tietokanta olisi ollut ylimitoitettu ratkaisu yhden käyttöliittymän harjoitustyöhön.",
        en: "I chose to store the PIN as a hash rather than plain text, since authentication data should never be stored in cleartext, even in a course exercise. Plain text files were enough for storage at this scope: a database would have been overkill for a single UI exercise.",
      },
      resultPoints: [
        {
          fi: "Käyttöliittymä laskee ja näyttää hinnan reaaliajassa syötetyn litramäärän ja valitun polttoainelajin perusteella.",
          en: "The interface calculates and displays the price in real time based on the entered fuel amount and selected fuel type.",
        },
        {
          fi: "PIN-koodin tarkistus toimii hajautettua arvoa vasten, eikä koodia koskaan käsitellä tai tallenneta selväkielisenä.",
          en: "PIN verification works against the hashed value, and the code is never processed or stored in cleartext.",
        },
        {
          fi: "Jokainen tankkaus tallentuu aikaleimattuna tilaushistoriaan, joten sovellus säilyttää tiedon aiemmista tankkauksista istuntojen välillä.",
          en: "Every fill-up is saved with a timestamp to the order history, so the app retains a record of past fill-ups across sessions.",
        },
      ],
      reflection: {
        fi: "Jatkokehityksenä tallennuksen voisi siirtää tekstitiedostoista tietokantaan ja lisätä kattavamman virheenkäsittelyn käyttöliittymän tapahtumankäsittelyyn.",
        en: "As a next step, storage could move from text files to a database, and the UI's event handling could get more thorough error handling.",
      },
      images: [
        { src: "/images/projects/bensis/01-kayttoliittyma-ja-koodi.jpg", alt: { fi: "Mittaristo-näkymä ja BensisDisplayController-koodi", en: "The pump display view and the BensisDisplayController code" } },
        { src: "/images/projects/bensis/02-pin-tarkistus.jpg", alt: { fi: "PIN-koodin hajautusarvo ja PIN-kentän syöttö käyttöliittymässä", en: "The PIN's hashed value and the PIN entry field in the interface" } },
        { src: "/images/projects/bensis/03-tilaushistoria.jpg", alt: { fi: "Tankkaukset tallentuvat aikaleimattuna tilaukset.txt-tiedostoon", en: "Fill-ups are logged with timestamps to tilaukset.txt" } },
        { src: "/images/projects/bensis/04-tankkitasot-ja-hinta.jpg", alt: { fi: "Tankkitasot ja laskettu kokonaishinta", en: "Tank levels and the calculated total price" } },
      ],
      video: "/videos/bensis-full.mp4",
      videoDuration: "3:55",
      pdf: null,
    },
  },
  {
    slug: "sieniopas",
    category: "ui-ux",
    title: {
      fi: "Sieniopas – mobiilisovelluksen käyttöliittymäkonsepti",
      en: "Sieniopas – mobile app UI concept",
    },
    status: { fi: "Kurssiprojekti", en: "Course project" },
    summary: {
      fi: "Käyttöliittymän suunnittelu -kurssin projektina suunnittelin Figmalla mobiilisovelluskonseptin sienestäjille: kausivinkit, sienihaku ja -selaus sekä yksityiskohtaiset sienikohtaiset tietosivut, klikattavana prototyyppinä.",
      en: "Designed as a project for the UI Design course, a Figma mobile app concept for foragers: seasonal tips, mushroom search and browsing, and detailed species pages, built as a clickable prototype.",
    },
    technologies: ["Figma", "UI/UX-suunnittelu", "Prototyyppaus"],
    githubUrl: "#",
    liveUrl: "#",
    hasDetail: true,
    detail: {
      problem: {
        fi: "Tavoitteena oli suunnitella käyttöliittymä, joka auttaa sienestäjää tunnistamaan ja poimimaan sieniä turvallisesti: löytämään ajankohtaiset kausisienet, selaamaan ja hakemaan tunnettuja lajeja sekä lukemaan selkeät, luotettavat tiedot kustakin sienestä ennen poimintaa.",
        en: "The goal was to design an interface that helps a forager identify and pick mushrooms safely: finding what's in season right now, browsing and searching known species, and reading clear, reliable information about each mushroom before picking it.",
      },
      architectureIntro: {
        fi: "Konsepti suunniteltiin Figmalla kolmena toisiinsa linkittyvänä näyttönä, jotka testattiin klikattavalla prototyypillä:",
        en: "The concept was designed in Figma as three linked screens, tested with a clickable prototype:",
      },
      architecturePoints: [
        {
          fi: "Koti-näkymä: kausivinkit (mitä juuri nyt kannattaa poimia), poimintavinkit turvalliseen keräämiseen ja nopeat reseptivinkit samalla näytöllä.",
          en: "Home screen: seasonal tips (what's worth picking right now), safe-foraging tips, and quick recipe ideas all on one screen.",
        },
        {
          fi: "Selaus ja haku: ruudukkomainen sienikorttinäkymä hakukentällä ja suodattimilla, sekä kameran kautta tapahtuvan kuvatunnistuksen paikka navigaatiossa.",
          en: "Browse and search: a grid of mushroom cards with a search field and filters, plus a camera-based identification entry point in the navigation.",
        },
        {
          fi: "Tietonäkymä: yksittäisen sienen kuva, tieteellinen nimi, tunnistuspiirteet, kasvupaikka ja käyttövinkit yhdellä sivulla, suosikkeihin tallennus -painikkeella.",
          en: "Detail view: a single mushroom's photo, scientific name, identifying features, habitat, and usage tips on one page, with a save-to-favorites button.",
        },
      ],
      architectureReasoning: {
        fi: "Aloitin suunnittelun tutkimalla olemassa olevia sienioppaita (mm. WildFoodUK) nähdäkseni, miten ne jäsentävät tunnistustietoa ja mitä yksityiskohtia käyttäjä tarvitsee poimintapäätöksen tueksi. Päädyin ruudukkomaiseen selausnäkymään listan sijaan, koska sienten tunnistus on ensisijaisesti visuaalista: kuva kertoo enemmän kuin pelkkä nimi listassa.",
        en: "I started by researching existing mushroom guides (WildFoodUK among others) to see how they structure identification info and what details a user needs to make a picking decision. I went with a grid browsing view instead of a list because mushroom identification is primarily visual: a photo says more than a name in a list.",
      },
      resultPoints: [
        {
          fi: "Kolme näyttöä muodostavat toimivan polun: kausivinkeistä sienen valintaan ja sieltä yksityiskohtaiseen tunnistustietoon.",
          en: "The three screens form a working flow: from seasonal tips to picking a mushroom to its detailed identification info.",
        },
        {
          fi: "Klikattava prototyyppi todistaa navigointilogiikan toimivan: koti-, selaus- ja tietonäkymien välillä liikkuminen on loogista ja johdonmukaista.",
          en: "The clickable prototype confirms the navigation logic works: moving between the home, browse, and detail views is logical and consistent.",
        },
        {
          fi: "Referenssitutkimus vahvisti, että selkeät kategoriat (syötävä/myrkyllinen, kausi) ja hyvälaatuiset kuvat ovat sienioppaassa tärkeämpiä kuin tekstin määrä.",
          en: "The reference research confirmed that clear categories (edible/poisonous, season) and high-quality photos matter more in a mushroom guide than the amount of text.",
        },
      ],
      reflection: {
        fi: "Jatkokehityksenä kameratunnistus voisi oikeasti yhdistää kuvantunnistus-tekoälyyn, ja sovellukseen voisi lisätä käyttäjän oman poimintapäiväkirjan.",
        en: "As a next step, the camera identification feature could be connected to real image-recognition AI, and the app could add a personal foraging log for the user.",
      },
      images: [
        { src: "/images/projects/sieniopas/01-suunnitelma-yleiskuva.jpg", alt: { fi: "Kaikki kolme näyttöä Figman suunnittelunäkymässä", en: "All three screens in the Figma design view" } },
        { src: "/images/projects/sieniopas/02-koti-nakyma.jpg", alt: { fi: "Koti-näkymä: kausi-, poiminta- ja reseptivinkit", en: "Home screen: seasonal, foraging, and recipe tips" } },
        { src: "/images/projects/sieniopas/03-selaus-ja-haku.jpg", alt: { fi: "Selaus- ja hakunäkymä sienikorteilla", en: "Browse and search view with mushroom cards" } },
        { src: "/images/projects/sieniopas/04-tietonakyma.jpg", alt: { fi: "Yksittäisen sienen tietonäkymä", en: "A single mushroom's detail view" } },
      ],
      video: "/videos/sieniopas-full.mp4",
      videoDuration: "2:05",
      pdf: null,
    },
  },
  {
    slug: "yhteydenottolomake",
    category: "web",
    title: {
      fi: "Yhteydenottolomake ja ylläpitopaneeli",
      en: "Contact form & admin panel",
    },
    status: { fi: "Kurssiprojekti, ryhmätyö", en: "Course project, group work" },
    summary: {
      fi: "Web-ohjelmoinnin ryhmäprojektissa toteutin PHP:llä ylläpitopaneelin, joka listaa tietokantaan tallentuneet yhteydenottolomakkeen viestit uusimmasta vanhimpaan. Osa laajempaa neljän hengen ryhmäprojektia, jossa koko lomake-tallennus-ylläpito-ketju rakennettiin PHP:llä ja MySQL:llä.",
      en: "In a group web-programming project I built the PHP admin panel that lists contact-form submissions stored in the database, newest first. Part of a larger four-person group project where the whole form-storage-admin chain was built with PHP and MySQL.",
    },
    technologies: ["PHP", "MySQL", "JavaScript (Fetch API)", "HTML/CSS"],
    githubUrl: "#",
    liveUrl: "#",
    hasDetail: true,
    detail: {
      problem: {
        fi: "Web-ohjelmoinnin kurssin lopputyönä ryhmämme rakensi harjoitussivuston, jonka yhteydenottolomakkeen piti oikeasti tallentaa viestit tietokantaan sivun uudelleenlataamatta, ja jonkun piti pystyä käymään viestit läpi ilman suoraa tietokantayhteyttä. Tehtävät jaettiin ryhmän kesken: minun osuuteni oli ylläpitopaneeli, joka hakee ja näyttää tallentuneet viestit.",
        en: "As the final project for the web-programming course, our group built a practice site whose contact form needed to actually persist messages to a database without a page reload, and someone needed to be able to review those messages without a direct database connection. Tasks were split across the group: my part was the admin panel that fetches and displays the stored messages.",
      },
      architectureIntro: {
        fi: "Kokonaisuus jakautuu kolmeen osaan, joista rakensin ylläpitopaneelin:",
        en: "The system has three parts; I built the admin panel:",
      },
      architecturePoints: [
        {
          fi: "Lomake: contact.html lähettää tiedot fetch-kutsulla PHP-backendiin ilman sivun uudelleenlatausta, ja näyttää onnistumis- tai virheilmoituksen suoraan käyttäjälle.",
          en: "Form: contact.html sends the data to the PHP backend via fetch without reloading the page, and shows a success or error message directly to the user.",
        },
        {
          fi: "Tallennus: backend validoi kentät ja tallentaa viestin tietokantaan prepared statementilla (SQL-injektiosuojaus). Tämän osuuden toteutti tiimikaverini.",
          en: "Storage: the backend validates the fields and saves the message to the database with a prepared statement (SQL-injection protection). A teammate built this part.",
        },
        {
          fi: "Ylläpitopaneeli (oma osuuteni): admin/index.php avaa istunnon, hakee kaikki viestit uusimmasta vanhimpaan ja tulostaa ne htmlspecialchars-suojattuna (XSS-suojaus), sekä tarjoaa uloskirjautumisen. Kansio on lisäksi suojattu .htaccess-tunnistautumisella.",
          en: "Admin panel (my part): admin/index.php starts a session, fetches all messages newest-first, and prints them through htmlspecialchars (XSS protection), plus provides a logout action. The folder is additionally protected with .htaccess authentication.",
        },
      ],
      architectureReasoning: {
        fi: "Näytin jokaisen tietokannasta tulevan kentän aina htmlspecialchars-funktion kautta, koska viestien sisältö tulee suoraan käyttäjän syötteestä eikä sitä pidä koskaan tulostaa suodattamattomana HTML:n sekaan. .htaccess-suojaus riitti kurssin laajuudessa yksinkertaiseksi pääsynvalvonnaksi ylläpitopaneeliin ilman erillistä käyttäjähallintaa.",
        en: "I ran every field coming from the database through htmlspecialchars, since message content comes straight from user input and should never be printed into HTML unescaped. The .htaccess protection was enough at this course's scope as simple access control for the admin panel, without building separate user management.",
      },
      resultPoints: [
        {
          fi: "Koko ketju toimii päästä päähän: lomakkeelle kirjoitettu viesti tallentuu tietokantaan ja ilmestyy heti ylläpitopaneeliin uusimpana.",
          en: "The whole chain works end to end: a message submitted on the form is saved to the database and immediately appears at the top of the admin panel.",
        },
        {
          fi: "Ylläpitopaneeli näyttää jokaisen viestin lähettäjän, sähköpostin ja ajan yhdessä näkymässä, muokkaus- ja poistolinkein.",
          en: "The admin panel shows each message's sender, email, and timestamp in one view, with edit and delete links.",
        },
        {
          fi: "Ryhmätyö jaettiin selkeästi neljän hengen kesken (lomakkeen tallennus, ylläpitopaneeli, muokkaus/poisto, navigointi), ja työnjako dokumentoitiin omalle sivulleen.",
          en: "The group work was clearly split across four people (form storage, admin panel, edit/delete, navigation), and the task division was documented on its own page.",
        },
      ],
      reflection: {
        fi: "Jatkokehityksenä tietokantatunnukset siirtäisin pois suoraan koodista ympäristömuuttujiin, ja .htaccess-suojauksen sijaan rakentaisin oikean kirjautumisen istunnonhallinnalla.",
        en: "As a next step, I'd move the database credentials out of the code into environment variables, and replace the .htaccess protection with a proper login using session management.",
      },
      images: [
        { src: "/images/projects/yhteydenottolomake/01-yhteydenottolomake.jpg", alt: { fi: "Yhteydenottolomake käyttäjän näkymässä", en: "The contact form from the user's view" } },
        { src: "/images/projects/yhteydenottolomake/02-admin-viestit.jpg", alt: { fi: "Ylläpitopaneeli listaa saapuneet viestit uusimmasta vanhimpaan", en: "The admin panel lists incoming messages newest first" } },
        { src: "/images/projects/yhteydenottolomake/03-koodi-tietoturva.jpg", alt: { fi: "Ylläpitopaneelin koodi: tietokantahaku ja XSS-suojattu tulostus", en: "The admin panel's code: the database query and XSS-safe output" } },
      ],
      video: null,
      pdf: null,
    },
  },
  {
    slug: "testausprosessit",
    category: "testing",
    title: {
      fi: "Testausprosessit: yksikkötestauksesta automaatioon",
      en: "Testing processes: from unit tests to automation",
    },
    status: { fi: "Kurssiprojekti", en: "Course project" },
    summary: {
      fi: "Testausprosessit-kurssilla harjoittelin koko testauksen kaaren: yksikkötestausta rajatapausanalyysillä, muodollista testitapaussuunnittelua oikeaa sivustoa vastaan, bugiraportointia sekä testiautomaatiota Robot Frameworkilla.",
      en: "In the Testing Processes course I practiced the full testing arc: unit testing with boundary value analysis, formal test case design against a real website, bug reporting, and test automation with Robot Framework.",
    },
    technologies: ["Python", "unittest", "Robot Framework", "Testitapaussuunnittelu"],
    githubUrl: "#",
    liveUrl: "#",
    hasDetail: true,
    detail: {
      problem: {
        fi: "Tavoitteena oli harjoitella testausta useasta suunnasta yhden kurssin aikana: osata kirjoittaa rajatapauksiin keskittyviä yksikkötestejä, suunnitella ja ajaa muodollisia testitapauksia oikeaa julkista sivustoa vastaan, raportoida löydetyt viat jäsennellysti, ja automatisoida toistuva tarkistus skriptillä ihmisen sijaan.",
        en: "The goal was to practice testing from several angles over one course: writing unit tests focused on boundary conditions, designing and running formal test cases against a real public website, reporting found issues in a structured way, and automating a repetitive check with a script instead of a person.",
      },
      architectureIntro: {
        fi: "Kokonaisuus jakautui neljään osa-alueeseen:",
        en: "The work covered four areas:",
      },
      architecturePoints: [
        {
          fi: "Yksikkötestaus rajatapauksilla: kirjoitin Pythonin unittest-kirjastolla AAA-mallin (Arrange-Act-Assert) mukaisia testejä ikä- ja kolmioluokittelufunktioille, testasin tarkoituksella juuri rajakohtia (esim. ikä 18 tai kolmion sivut 3-3-2), ja korjasin logiikan kunnes kaikki testit menivät läpi.",
          en: "Unit testing with boundary values: I wrote AAA-pattern (Arrange-Act-Assert) unit tests with Python's unittest for an age-classification and a triangle-classification function, deliberately testing edge cases (e.g. age 18, or triangle sides 3-3-2), and fixed the logic until every test passed.",
        },
        {
          fi: "Testitapaussuunnittelu: suunnittelin ja ajoin kaksi muodollista testitapausta (TC_01, TC_02) Ylen vaalien tulospalvelua vastaan (etusivun lataus ja kunnan valintatoiminto), osana ryhmän kymmenen testitapauksen kokonaisuutta.",
          en: "Test case design: I designed and ran two formal test cases (TC_01, TC_02) against Yle's election results service (front-page load and municipality selection), as part of the group's set of ten test cases.",
        },
        {
          fi: "Bugiraportointi: kirjoitin muodollisen bugiraportin bug report -templatella (harjoitustyö, kuvitteellinen bugi) verkkokauppa.com-sivuston ostoskorista: tuotemäärän nostaminen ei päivittänyt välisummaa ennen sivun päivittämistä.",
          en: "Bug reporting: I wrote a formal bug report with a bug-report template (a practice exercise, a fictional bug) about verkkokauppa.com's shopping cart: raising the item quantity didn't update the subtotal until the page was refreshed.",
        },
        {
          fi: "Testiautomaatio Robot Frameworkilla: kirjoitin skriptin, joka lukee osoitelistan tiedostosta, pingaa jokaisen silmukassa, parsii IP-osoitteen ja keskiarvoviiveen pingin tulosteesta, varmistaa raja-arvon (alle 50ms) ja kirjoittaa tulokset omaan tiedostoonsa.",
          en: "Test automation with Robot Framework: I wrote a script that reads a list of addresses from a file, pings each one in a loop, parses the IP address and average latency from the ping output, asserts a threshold (under 50ms), and writes the results to its own file.",
        },
      ],
      architectureReasoning: {
        fi: "Keskityin yksikkötesteissä juuri rajatapauksiin (esim. ikä täsmälleen 18), koska suurin osa oikeista bugeista piilee raja-arvoissa, ei tyypillisissä keskiarvoissa. Testitapaukset suunnittelin oikeaa, tuotannossa olevaa sivustoa vastaan pelkän harjoitussovelluksen sijaan, jotta testidata ja tulokset vastaisivat oikeaa käyttötilannetta. Bugiraportissa merkitsin selvästi, että kyseessä on harjoitustyön kuvitteellinen bugi, ei oikea löydetty haavoittuvuus. Automaatioskriptissä valitsin yksinkertaisen tiedostopohjaisen syötteen ja tulosteen, koska tarkoitus oli demonstroida toistettava, ajastettavissa oleva tarkistus ilman ylimääräistä infrastruktuuria.",
        en: "In the unit tests I focused specifically on boundary values (e.g. age exactly 18), since most real bugs hide at the edges, not in typical mid-range values. I designed the test cases against a real, live website rather than a toy app, so the test data and results would reflect an actual usage scenario. In the bug report I clearly labeled it as a fictional bug from a practice exercise, not an actual discovered vulnerability. For the automation script I chose simple file-based input and output, since the point was to demonstrate a repeatable, schedulable check without extra infrastructure.",
      },
      resultPoints: [
        {
          fi: "Kaikki yksikkötestit menevät läpi rajatapauskorjausten jälkeen; prosessi paljasti konkreettisia virheitä rajakohdissa jotka eivät näkyneet tyypillisillä syötteillä.",
          en: "All unit tests pass after fixing the boundary cases; the process surfaced concrete bugs at the edges that didn't show up with typical inputs.",
        },
        {
          fi: "Testitapaukset TC_01 ja TC_02 suoritettiin onnistuneesti oikeaa sivustoa vastaan, molemmat tulos Pass, dokumentoituna muodollisella testitapauspohjalla.",
          en: "Test cases TC_01 and TC_02 ran successfully against the real website, both with a Pass result, documented on a formal test case template.",
        },
        {
          fi: "Robot Framework -automaatio suoritettiin onnistuneesti kolmea oikeaa verkko-osoitetta vastaan (\"2 tests, 2 passed, 0 failed\"), ja tulokset (osoite, IP, keskiarvoviive) tallentuivat oikein tulostiedostoon.",
          en: "The Robot Framework automation ran successfully against three real web addresses (\"2 tests, 2 passed, 0 failed\"), and the results (address, IP, average latency) were correctly saved to the output file.",
        },
      ],
      reflection: {
        fi: "Jatkokehityksenä automaatioskriptin voisi ajaa ajastetusti CI-putkessa ja lähettää ilmoituksen jos jokin osoite ylittää viiverajan, ja testitapauksia voisi laajentaa kattamaan enemmän sivuston toimintoja.",
        en: "As a next step, the automation script could run on a schedule in a CI pipeline and send an alert if any address exceeds the latency threshold, and the test cases could be extended to cover more of the site's functionality.",
      },
      images: [
        { src: "/images/projects/testausprosessit/01-testitapaus.jpg", alt: { fi: "Testitapaus TC_01: tulospalvelun etusivun lataustesti", en: "Test case TC_01: the results service's front-page load test" } },
        { src: "/images/projects/testausprosessit/02-bugiraportti.jpg", alt: { fi: "Bugiraportti: ostoskorin välisumma ei päivity (harjoitustyö)", en: "Bug report: the cart subtotal doesn't update (practice exercise)" } },
        { src: "/images/projects/testausprosessit/03-yksikkotestaus.jpg", alt: { fi: "Yksikkötestit rajatapauksille, kaikki läpäisty", en: "Unit tests for boundary cases, all passing" } },
        { src: "/images/projects/testausprosessit/04-robot-skripti.jpg", alt: { fi: "Robot Framework -skripti: pingaus, jäsennys ja raja-arvon tarkistus", en: "The Robot Framework script: pinging, parsing, and the threshold check" } },
        { src: "/images/projects/testausprosessit/05-robot-tulokset.jpg", alt: { fi: "Automaation ajo: kaikki testit läpi ja tulokset tallennettu", en: "The automation run: all tests passing and results saved" } },
      ],
      video: "/videos/testausprosessit-full.mp4",
      videoDuration: "1:14",
      pdf: null,
    },
  },];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
