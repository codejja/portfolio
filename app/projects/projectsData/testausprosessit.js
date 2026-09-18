export const testausprosessit = {
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
};
