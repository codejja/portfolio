export default function Contact() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold mt-8 mb-4">Yhteystiedot</h2>

      <p>
        Sähköposti:{" "}
        <a
          href="mailto:oma.sahkoposti@example.com"
          className="text-blue-600 underline"
        >
          oma.sahkoposti@example.com
        </a>
      </p>

      <p>
        GitHub:{" "}
        <a
          href="https://github.com/oma-kayttajanimi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          github.com/oma-kayttajanimi
        </a>
      </p>
    </section>
  );
}