import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "💼 Portfolio-sivusto",
    description:
      "Rakennan omaa portfoliosivustoani, jonka tarkoitus on esitellä osaamistani ja projektejani työnhakua varten.",
    technologies: "Next.js, React, Tailwind CSS",
    githubUrl: "https://github.com/...",
  },
  {
    title: "✅ Tehtävälistasovellus",
    description:
      "Rakensin sovelluksen, jossa käyttäjä voi lisätä, poistaa ja merkitä tehtäviä tehdyiksi.",
    technologies: "HTML, CSS, JavaScript",
    githubUrl: "https://github.com/...",
  },
  {
    title: "🌦️ Sääsovellus",
    description:
      "Rakensin sääsovelluksen, joka hakee säätietoja API:n avulla ja näyttää ne käyttäjälle.",
    technologies: "JavaScript, API, CSS",
    githubUrl: "https://github.com/...",
  },
];

export default function Projects() {
  return (
    <section className="space-y-4" id="projects">
      <h2 className="text-center text-4xl font-semibold mt-8 mb-4">
        Viimeisimpiä projekteja
      </h2>

      <p className="text-center mt-2 text-gray-600">
        Esimerkkejä projekteista, joissa olen harjoitellut web-kehitystä.
      </p>

      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}