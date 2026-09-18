export const sieniopas = {
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
};
