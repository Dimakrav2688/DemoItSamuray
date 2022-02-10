import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";




// translations
// import translationEN from './locales/en/translation.json';
// import translationRU from './locales/ru/translation.json';
// import translationUA from './locales/ua/translation.json';
//
// // the translations
// const resources = {
//     en: {
//         translation: translationEN
//     },
//     ru: {
//         translation: translationRU
//     },ua: {
//         translation: translationUA
//     }
// };
i18n
    // load translation using http -> see /public/locales
    // learn more: https://github.com/i18next/i18next-http-backend
    .use(Backend)
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    // .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        // resources,
        react: {
            useSuspense: false
        },
        defaultNS: 'translation',
        fallbackLng: 'ua',
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

// i18n
//     .use(initReactI18next)
//     .use(I18nextBrowserLanguageDetector)
//     .use(I18NextHttpBackend)
//     .init({
//         fallbackLng: 'en',
//         whitelist: ['en', 'ru', 'ua'],
//         detection: {
//             order: ['localStorage','cookie' ],
//             caches: ['localStorage','cookie']
//         },
//         interpolation: {
//             escapeValue: false,
//         },
//     })

export default i18n;