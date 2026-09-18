export const yhteydenottolomake = {
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
};
