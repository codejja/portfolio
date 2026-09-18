export const powerAutomateHyvaksynta = {
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
};
