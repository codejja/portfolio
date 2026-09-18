"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { EXAMPLE_QUESTIONS } from "../../../lib/data-agent/examples";

const ui = {
  fi: {
    overline: "Demo",
    heading: "Data-analyysiagentti",
    intro:
      "Kysy liiketoimintakysymys kuvitteellisesta verkkokauppadatasta luonnollisella kielellä. Agentti tarkistaa tietokannan skeeman, kirjoittaa ja ajaa SQL-kyselyn itse, ja jos kysely epäonnistuu, korjaa sen ja yrittää uudelleen. Koko päättelyketju näkyy alla läpinäkyvästi.",
    disclaimer:
      "Kaikki data on keksittyä demodataa, ei oikeaa myyntiä. Alla olevien esimerkkikysymysten vastaukset on esilaskettu (agentti on ajanut ne oikeasti kertaalleen), jotta julkinen sivu ei kutsu Claude APIa livenä jokaisella vierailijalla — näin demo ei aiheuta yllättäviä kuluja. Koko lähdekoodi, myös oikea live-agenttisilmukka, on GitHubissa.",
    placeholder: "Kokeile jotain alla olevista esimerkkikysymyksistä",
    ask: "Kysy",
    asking: "Haetaan vastausta…",
    examplesLabel: "Kokeile esimerkiksi:",
    thought: "Päättely",
    toolCall: (tool) => (tool === "list_tables" ? "Tarkistaa tietokannan skeeman" : "Ajaa SQL-kyselyn"),
    sqlLabel: "SQL",
    resultLabel: "Tulos",
    errorLabel: "Virhe",
    truncated: (n) => `Näytetään ensimmäiset ${n} riviä.`,
    answerLabel: "Vastaus",
    cachedNote: "Esilaskettu vastaus (ei livekutsu).",
    rateLimited: "Liikaa kyselyitä hetkessä, yritä hetken päästä uudelleen.",
    missingKey:
      "Demo on tilapäisesti pois käytöstä (palvelimelta puuttuu API-avain). Ota yhteyttä jos haluat nähdä sen toiminnassa.",
    disabled:
      "Tämä on demo vain neljälle esimerkkikysymykselle, jotta julkinen sivu ei aiheuta ennustamattomia API-kuluja. Kokeile jotain yllä olevista esimerkeistä, tai katso koodi ja aja agentti livenä omalla koneellasi GitHubista.",
    genericError: "Jokin meni pieleen. Yritä uudelleen.",
    back: "← Kaikki projektit",
  },
  en: {
    overline: "Demo",
    heading: "Data analyst agent",
    intro:
      "Ask a business question about a fictional e-commerce dataset in plain language. The agent checks the database schema, writes and runs its own SQL query, and if the query fails, fixes it and tries again. The full reasoning chain is shown below, transparently.",
    disclaimer:
      "All data is fictional demo data, not real sales. The example questions below have precomputed answers (the agent genuinely ran them once) so the public page doesn't call the Claude API live on every visitor — that keeps costs predictable. The full source, including the real live agent loop, is on GitHub.",
    placeholder: "Try one of the example questions below",
    ask: "Ask",
    asking: "Fetching answer…",
    examplesLabel: "Try for example:",
    thought: "Reasoning",
    toolCall: (tool) => (tool === "list_tables" ? "Checking the database schema" : "Running a SQL query"),
    sqlLabel: "SQL",
    resultLabel: "Result",
    errorLabel: "Error",
    truncated: (n) => `Showing the first ${n} rows.`,
    answerLabel: "Answer",
    cachedNote: "Precomputed answer (not a live call).",
    rateLimited: "Too many requests right now, try again in a moment.",
    missingKey:
      "The demo is temporarily unavailable (the server is missing an API key). Get in touch if you'd like to see it in action.",
    disabled:
      "This demo only covers the four example questions, so the public page doesn't run up unpredictable API costs. Try one of the examples above, or check the code and run the agent live yourself from GitHub.",
    genericError: "Something went wrong. Please try again.",
    back: "← All projects",
  },
};

function ResultTable({ rows, truncated, t }) {
  if (!rows || rows.length === 0) {
    return <p className="mt-1 text-xs text-stone-500 dark:text-stone-500">—</p>;
  }
  const columns = Object.keys(rows[0]);
  const shown = rows.slice(0, 10);

  return (
    <div className="mt-2 overflow-x-auto rounded border border-stone-200 dark:border-stone-800">
      <table className="w-full text-left text-xs">
        <thead className="bg-stone-100 dark:bg-stone-900">
          <tr>
            {columns.map((col) => (
              <th key={col} className="px-3 py-1.5 font-mono font-semibold text-stone-600 dark:text-stone-400">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
          {shown.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={col} className="px-3 py-1.5 text-stone-700 dark:text-stone-300">
                  {String(row[col])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {(truncated || rows.length > 10) && (
        <p className="border-t border-stone-200 px-3 py-1 font-mono text-[11px] text-stone-500 dark:border-stone-800 dark:text-stone-500">
          {t.truncated(shown.length)}
        </p>
      )}
    </div>
  );
}

function StepView({ step, t }) {
  if (step.type === "thought") {
    return (
      <div className="flex gap-2 text-[13px] leading-relaxed text-stone-500 italic dark:text-stone-500">
        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-300 dark:bg-stone-700" />
        <span>{step.text}</span>
      </div>
    );
  }

  // tool_call
  const output = step.output || {};
  return (
    <div className="flex gap-2 text-[13px] leading-relaxed text-stone-600 dark:text-stone-400">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-stone-800 dark:text-stone-200">{t.toolCall(step.tool)}</p>

        {step.tool === "run_query" && step.input?.sql && (
          <pre className="mt-1.5 overflow-x-auto rounded bg-stone-900 px-3 py-2 font-mono text-[12px] text-stone-100 dark:bg-black">
            {step.input.sql}
          </pre>
        )}

        {output.error ? (
          <p className="mt-1.5 font-mono text-[12px] text-accent-600 dark:text-accent-400">
            {t.errorLabel}: {output.error}
          </p>
        ) : output.rows ? (
          <ResultTable rows={output.rows} truncated={output.truncated} t={t} />
        ) : output.schema ? (
          <pre className="mt-1.5 overflow-x-auto rounded bg-stone-100 px-3 py-2 font-mono text-[11px] leading-relaxed text-stone-600 dark:bg-stone-900 dark:text-stone-400">
            {output.schema}
          </pre>
        ) : null}
      </div>
    </div>
  );
}

export default function DataAgentDemo() {
  const { lang } = useLanguage();
  const t = ui[lang];

  const [question, setQuestion] = useState("");
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(false);

  async function ask(q) {
    const trimmed = q.trim();
    if (!trimmed || loading) return;

    setLoading(true);
    setQuestion("");
    const exchangeIndex = exchanges.length;
    setExchanges((prev) => [
      ...prev,
      { question: trimmed, steps: [], answer: null, error: null, cached: false },
    ]);

    try {
      const res = await fetch("/api/data-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed }),
      });
      const data = await res.json();

      if (!res.ok) {
        const message =
          data.error === "RATE_LIMITED"
            ? t.rateLimited
            : data.error === "MISSING_API_KEY"
              ? t.missingKey
              : t.genericError;
        setExchanges((prev) =>
          prev.map((ex, i) => (i === exchangeIndex ? { ...ex, error: message } : ex))
        );
      } else if (data.disabled) {
        setExchanges((prev) =>
          prev.map((ex, i) => (i === exchangeIndex ? { ...ex, error: t.disabled } : ex))
        );
      } else {
        setExchanges((prev) =>
          prev.map((ex, i) =>
            i === exchangeIndex
              ? { ...ex, steps: data.steps || [], answer: data.answer, cached: Boolean(data.cached) }
              : ex
          )
        );
      }
    } catch {
      setExchanges((prev) =>
        prev.map((ex, i) => (i === exchangeIndex ? { ...ex, error: t.genericError } : ex))
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/projects"
        className="text-sm font-semibold text-stone-500 underline decoration-stone-300 underline-offset-4 transition hover:text-accent-600 hover:decoration-accent-600 dark:text-stone-400 dark:decoration-stone-700 dark:hover:text-accent-400"
      >
        {t.back}
      </Link>

      <section className="mt-6 mb-8">
        <span className="text-xs font-semibold uppercase tracking-wide text-accent-600 dark:text-accent-400">
          {t.overline}
        </span>
        <h1 className="font-heading mt-2 text-4xl font-black tracking-tight text-stone-950 md:text-5xl dark:text-white">
          {t.heading}
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-stone-600 dark:text-stone-400">
          {t.intro}
        </p>
        <p className="mt-3 max-w-2xl font-mono text-xs text-stone-500 dark:text-stone-500">
          {t.disclaimer}
        </p>
      </section>

      <section className="mb-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(question);
          }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={t.placeholder}
            disabled={loading}
            className="flex-1 rounded border border-stone-300 bg-white px-4 py-2.5 text-[15px] text-stone-950 placeholder:text-stone-400 focus:border-accent-500 focus:outline-none disabled:opacity-60 dark:border-stone-700 dark:bg-stone-900 dark:text-white dark:placeholder:text-stone-600"
          />
          <button
            type="submit"
            disabled={loading || !question.trim()}
            className="shrink-0 rounded bg-accent-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-accent-500 dark:hover:bg-accent-400 dark:text-stone-950"
          >
            {loading ? t.asking : t.ask}
          </button>
        </form>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="w-full font-mono text-xs text-stone-500 dark:text-stone-500">
            {t.examplesLabel}
          </span>
          {EXAMPLE_QUESTIONS.map((q) => (
            <button
              key={q.fi}
              type="button"
              onClick={() => ask(q[lang])}
              disabled={loading}
              className="rounded-full border border-stone-300 px-3 py-1.5 text-xs text-stone-600 transition hover:border-accent-500 hover:text-accent-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-stone-700 dark:text-stone-400 dark:hover:border-accent-400 dark:hover:text-accent-400"
            >
              {q[lang]}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-10 border-t border-stone-200 pt-10 dark:border-stone-800">
        {exchanges
          .slice()
          .reverse()
          .map((ex, i) => (
            <div key={exchanges.length - 1 - i}>
              <p className="text-lg font-bold text-stone-950 dark:text-white">{ex.question}</p>

              {ex.steps.length > 0 && (
                <div className="mt-4 space-y-3 border-l-2 border-stone-200 pl-4 dark:border-stone-800">
                  {ex.steps.map((step, si) => (
                    <StepView key={si} step={step} t={t} />
                  ))}
                </div>
              )}

              {ex.answer && (
                <div className="mt-4 rounded border-l-2 border-accent-600 bg-accent-50 px-4 py-3 dark:border-accent-400 dark:bg-accent-950/30">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-wide text-accent-600 dark:text-accent-400">
                      {t.answerLabel}
                    </p>
                    {ex.cached && (
                      <p className="font-mono text-[10px] text-stone-500 dark:text-stone-500">
                        {t.cachedNote}
                      </p>
                    )}
                  </div>
                  <p className="mt-1 text-[15px] leading-relaxed text-stone-800 dark:text-stone-200">
                    {ex.answer}
                  </p>
                </div>
              )}

              {ex.error && (
                <p className="mt-4 text-sm text-accent-600 dark:text-accent-400">{ex.error}</p>
              )}

              {!ex.steps.length && !ex.answer && !ex.error && (
                <p className="mt-3 text-sm text-stone-500 dark:text-stone-500">{t.asking}</p>
              )}
            </div>
          ))}
      </section>
    </div>
  );
}
