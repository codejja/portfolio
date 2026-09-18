export const dataFactory = {
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
};
