export const locales = ["en", "es", "fr", "de", "cs"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const LOCALE_COOKIE = "locale";

/** Short labels shown in the switcher (user-facing codes). */
export const localeCodes: Record<Locale, string> = {
  en: "EN",
  es: "SP",
  fr: "FR",
  de: "DE",
  cs: "CZ",
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  cs: "Čeština",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
