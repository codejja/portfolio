export const tyollisyysPowerbi = {
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
};
