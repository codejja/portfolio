const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Next.js"];

export default function Skills() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold mt-8 mb-4">Taidot</h2>

      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-white border px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}