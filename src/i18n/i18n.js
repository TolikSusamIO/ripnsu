import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import rus from "./translations/ru_translations.json"
import en from "./translations/en_translations.json"

const resources= {
  rus,
  en
};

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
    fallbackLng: "rus",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;