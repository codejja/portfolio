export const socialMediaAnalyser = {
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
};
