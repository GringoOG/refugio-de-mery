import type { Locale } from "./config";
import type { Dictionary } from "./types";
import { cs } from "./messages/cs";
import { de } from "./messages/de";
import { en } from "./messages/en";
import { es } from "./messages/es";
import { fr } from "./messages/fr";

const ready: Record<Locale, Dictionary> = {
  en,
  es,
  fr,
  de,
  cs,
};

export type { Dictionary } from "./types";
export { cs, de, en, es, fr };

export const dictionaries = ready;

export function getDictionary(locale: Locale): Dictionary {
  return ready[locale] ?? en;
}
