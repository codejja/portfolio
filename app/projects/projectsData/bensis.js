export const bensis = {
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
};
