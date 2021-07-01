import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from "i18next-http-backend";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { TRANSLATIONS_EN } from './translations/en/translation';
import { TRANSLATIONS_FR } from './translations/fr/tanslation';
//import moment from "momentsjs";

const languages = ["en", "fr"];

i18n
    .use(XHR)
    .use(Backend)

    .use(LanguageDetector)

    .use(initReactI18next)

    .init({
        detection: { order: ["navigator"] },
        whitelist: languages,
        fallbackLng: "fr",
        resources: {
            en: {
                translation: TRANSLATIONS_EN
            },
            fr: {
                translation: TRANSLATIONS_FR
            }
        }

    });
//i18n.changeLanguage();


export default i18n;