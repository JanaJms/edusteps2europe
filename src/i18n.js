// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "welcome": "Welcome to EduSteps2Europe",
            // add your English strings here
        }
    },
    fr: {
        translation: {
            "welcome": "Bienvenue chez EduSteps2Europe",
            // add your French strings here
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // default language
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;