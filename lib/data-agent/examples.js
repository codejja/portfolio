// Esimerkkikysymykset, jaettu käyttöliittymän, precompute-skriptin ja
// API-reitin välimuistihaun kesken, jotta ne pysyvät aina synkassa.
export const EXAMPLE_QUESTIONS = [
  {
    fi: "Mikä tuotekategoria myi vähiten viimeisen vuoden aikana?",
    en: "Which product category sold the least over the last year?",
  },
  {
    fi: "Ketkä ovat 5 parasta asiakasta liikevaihdolla mitattuna?",
    en: "Who are the top 5 customers by revenue?",
  },
  {
    fi: "Miten tilausten tilat jakautuvat (maksettu/toimitettu/palautettu/peruttu)?",
    en: "How are order statuses distributed (paid/shipped/returned/cancelled)?",
  },
  {
    fi: "Mikä on keskimääräinen tilauksen arvo kaupungeittain?",
    en: "What's the average order value by city?",
  },
];

export function normalizeQuestion(question) {
  return question.trim().replace(/\s+/g, " ").toLowerCase();
}
