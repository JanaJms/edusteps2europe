import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locals/en.json';
import frTranslations from './locals/fr.json';

const resources = {
    en: {
        translation: enTranslations
    },
    fr: {
        translation: frTranslations
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en", // default language to read
        fallbackLng: "en", // if a key is missing in FR, use the EN version
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;