import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { normalizeQuestion } from "./examples.js";

const CACHE_PATH = path.join(process.cwd(), "data", "data-agent-examples.json");

let cache = null;
let loaded = false;

// Lataa esilasketut esimerkkivastaukset (ks. scripts/precompute-data-agent-examples.mjs).
// Julkisella sivulla tämä on ainoa lähde vastauksille, jotta demo ei kutsu
// Claude APIa livenä jokaisella vierailijalla — se pitäisi kulut ennustamattomina.
function loadCache() {
  if (loaded) return cache;
  loaded = true;

  if (!existsSync(CACHE_PATH)) {
    cache = {};
    return cache;
  }

  try {
    const raw = readFileSync(CACHE_PATH, "utf-8");
    cache = JSON.parse(raw);
  } catch {
    cache = {};
  }
  return cache;
}

export function getCachedAnswer(question) {
  const data = loadCache();
  const key = normalizeQuestion(question);
  return data[key] || null;
}
