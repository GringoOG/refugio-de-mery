export { LocaleProvider, useLocale } from "./LocaleProvider";
export type { Dictionary } from "./types";
export {
  locales,
  defaultLocale,
  localeCodes,
  localeNames,
  isLocale,
  LOCALE_COOKIE,
  type Locale,
} from "./config";
export { getDictionary, dictionaries } from "./dictionaries";
export {
  buildRooms,
  buildToursItems,
  buildFoodItems,
  buildProductsItems,
  buildAboutItems,
  heroCardLabel,
} from "./buildContent";
