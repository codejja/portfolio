export default function Footer() {
  return (
    <footer className="print:hidden mt-24 border-t border-stone-200 px-6 py-10 dark:border-stone-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-stone-500 dark:text-stone-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-stone-700 dark:text-stone-300">
              Janne Kujala
            </span>
          </p>

          <p className="mt-1 font-mono text-xs text-stone-400 dark:text-stone-600">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.15em] text-stone-500 dark:text-stone-400">
          <a
            href="mailto:jannekujala1996@gmail.com"
            className="transition hover:text-accent-600 dark:hover:text-accent-400"
          >
            Email
          </a>

          <a
            href="https://github.com/codejja"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-accent-600 dark:hover:text-accent-400"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/jannekujala"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-accent-600 dark:hover:text-accent-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
