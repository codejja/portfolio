export const yhteydenottolomake = {
  slug: "yhteydenottolomake",
  category: "web",
  title: {
    fi: "Yhteydenottolomake ja ylläpitopaneeli",
    en: "Contact form & admin panel",
  },
  status: { fi: "Kurssiprojekti, ryhmätyö", en: "Course project, group work" },
  summary: {
    fi: "Web-ohjelmoinnin ryhmäprojektissa toteutin yhteydenottolomakkeen käyttöliittymän (HTML, CSS ja JavaScript) sekä PHP:llä ylläpitopaneelin, joka listaa tietokantaan tallentuneet viestit uusimmasta vanhimpaan. Osa laajempaa neljän hengen ryhmäprojektia, jossa koko lomake-tallennus-ylläpito-ketju rakennettiin PHP:llä ja MySQL:llä. Projekti toteutettiin Scrum-työtavalla Jiraa ja Confluencea hyödyntäen, ja sivustolle laadittiin vaatimusmäärittely.",
    en: "In a group web-programming project I built the contact form's user interface (HTML, CSS and JavaScript) and the PHP admin panel that lists submissions stored in the database, newest first. Part of a larger four-person group project where the whole form-storage-admin chain was built with PHP and MySQL. The project was run using Scrum with Jira and Confluence, and a requirements specification was written for the site.",
  },
  technologies: ["PHP", "MySQL", "JavaScript (Fetch API)", "HTML/CSS", "Scrum", "Jira", "Confluence"],
  githubUrl: "#",
  liveUrl: "#",
  hasDetail: true,
  detail: {
    problem: {
      fi: "Web-ohjelmoinnin kurssin lopputyönä ryhmämme rakensi harjoitussivuston, jonka yhteydenottolomakkeen piti oikeasti tallentaa viestit tietokantaan sivun uudelleenlataamatta, ja jonkun piti pystyä käymään viestit läpi ilman suoraa tietokantayhteyttä. Tehtävät jaettiin ryhmän kesken: minun osuuteni oli lomakkeen käyttöliittymä, jolla käyttäjä lähettää viestin, sekä ylläpitopaneeli, joka hakee ja näyttää tallentuneet viestit.",
      en: "As the final project for the web-programming course, our group built a practice site whose contact form needed to actually persist messages to a database without a page reload, and someone needed to be able to review those messages without a direct database connection. Tasks were split across the group: my part was the form's user interface, where the user sends a message, and the admin panel that fetches and displays the stored messages.",
    },
    architectureIntro: {
      fi: "Kokonaisuus jakautuu kolmeen osaan, joista rakensin lomakkeen käyttöliittymän ja ylläpitopaneelin:",
      en: "The system has three parts; I built the form's user interface and the admin panel:",
    },
    architecturePoints: [
      {
        fi: "Lomake (oma osuuteni): contact.html lähettää tiedot fetch-kutsulla PHP-backendiin ilman sivun uudelleenlatausta, ja näyttää onnistumis- tai virheilmoituksen suoraan käyttäjälle.",
        en: "Form (my part): contact.html sends the data to the PHP backend via fetch without reloading the page, and shows a success or error message directly to the user.",
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
      fi: "Lomakkeessa lähetys tehdään fetch-kutsulla, jotta käyttäjä saa onnistumis- tai virheilmoituksen heti samalla sivulla eikä täytettyjä tietoja menetetä virhetilanteessa. Ylläpitopaneelissa näytin jokaisen tietokannasta tulevan kentän aina htmlspecialchars-funktion kautta, koska viestien sisältö tulee suoraan käyttäjän syötteestä eikä sitä pidä koskaan tulostaa suodattamattomana HTML:n sekaan. .htaccess-suojaus riitti kurssin laajuudessa yksinkertaiseksi pääsynvalvonnaksi ylläpitopaneeliin ilman erillistä käyttäjähallintaa.",
      en: "The form submits via fetch so the user gets a success or error message right away on the same page, and filled-in data isn't lost if something fails. In the admin panel, I ran every field coming from the database through htmlspecialchars, since message content comes straight from user input and should never be printed into HTML unescaped. The .htaccess protection was enough at this course's scope as simple access control for the admin panel, without building separate user management.",
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
        fi: "Ryhmätyö toteutettiin Scrum-työtavalla: tehtävät jaettiin neljän hengen kesken (minulla lomakkeen käyttöliittymä ja ylläpitopaneeli, muilla lomakkeen tallennus, muokkaus/poisto ja navigointi) ja niitä seurattiin Jirassa. Sivustolle laadittiin vaatimusmäärittely, ja dokumentaatio sekä työnjako koottiin Confluenceen.",
        en: "The group work followed Scrum: tasks were split across four people (I handled the form's user interface and the admin panel; others handled form storage, edit/delete and navigation) and tracked in Jira. A requirements specification was written for the site, and the documentation and task division were compiled in Confluence.",
      },
    ],
    reflection: {
      fi: "Jatkokehityksenä siirtäisin tietokantatunnukset pois koodista ympäristömuuttujiin, jotta ne eivät päädy versionhallintaan. .htaccess-suojauksen tilalle rakentaisin oikean kirjautumisen istunnonhallinnalla ja salasanatiivisteillä, jolloin käyttäjillä voisi olla omat tunnukset ja uloskirjautuminen toimisi luotettavasti.",
      en: "As a next step, I'd move the database credentials out of the code into environment variables so they never end up in version control. Instead of .htaccess protection, I'd build a proper login with session management and password hashing, so users could have their own accounts and logout would work reliably.",
    },
    images: [
      { src: "/images/projects/yhteydenottolomake/01-yhteydenottolomake.jpg", alt: { fi: "Yhteydenottolomake käyttäjän näkymässä", en: "The contact form from the user's view" } },
      { src: "/images/projects/yhteydenottolomake/02-admin-viestit.jpg", alt: { fi: "Ylläpitopaneeli listaa saapuneet viestit uusimmasta vanhimpaan", en: "The admin panel lists incoming messages newest first" } },
      { src: "/images/projects/yhteydenottolomake/03-koodi-tietoturva.jpg", alt: { fi: "Ylläpitopaneelin koodi: tietokantahaku ja XSS-suojattu tulostus", en: "The admin panel's code: the database query and XSS-safe output" } },
    ],
    video: null,
    pdf: null,
  },
};