export const powerBiAzureSql = {
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
};
