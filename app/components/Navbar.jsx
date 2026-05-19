export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/30 bg-white/80 px-6 py-4 shadow-lg shadow-black/5 backdrop-blur-xl">
        <a href="/" className="group flex flex-col leading-none">
  <span className="text-2xl font-bold tracking-tight text-gray-950 transition group-hover:text-blue-600">
    Janne
  </span>

  <span className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500 transition group-hover:text-blue-500">
    Kujala
  </span>
</a>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/projects"
            className="rounded-full px-5 py-2 text-[16px] font-medium text-gray-800 transition hover:bg-black/5 hover:text-blue-600"
          >
            Projektit
          </a>

          <a
            href="/skills"
            className="rounded-full px-5 py-2 text-[16px] font-medium text-gray-800 transition hover:bg-black/5 hover:text-blue-600"
          >
            Taidot
          </a>

          <a
            href="/cv"
            className="rounded-full px-5 py-2 text-[16px] font-medium text-gray-800 transition hover:bg-black/5 hover:text-blue-600"
          >
            CV
          </a>
        </div>

        <a
          href="/contact"
          className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.03] hover:shadow-blue-500/40"
        >
          Ota yhteyttä
        </a>
      </nav>
    </header>
  );
}