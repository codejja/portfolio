export default function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
}) {
  return (
    <article className="border rounded-xl p-6 space-y-3 bg-white shadow-sm hover:shadow-md transition">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p>{description}</p>

      <p>Teknologiat: {technologies}</p>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:opacity-80"
      >
        Katso GitHubissa
      </a>
    </article>
  );
}