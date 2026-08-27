export default function Footer() {
  return (
    <footer className="print:hidden mt-24 px-4 pb-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/30 bg-white/80 px-6 py-5 text-sm text-gray-600 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-gray-700/50 dark:bg-gray-900/80 dark:text-gray-400">

        <p>
          © 2026{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            Janne Kujala
          </span>
        </p>

        <a
          href="https://github.com/codejja"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium transition hover:text-blue-600 dark:hover:text-blue-400"
        >
          GitHub
        </a>

      </div>
    </footer>
  );
}
