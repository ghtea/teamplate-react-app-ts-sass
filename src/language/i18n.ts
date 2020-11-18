import i18n from "i18next"
import {initReactI18next} from "react-i18next";

import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import translationEn from './translation/en.json';
import translationKo from './translation/ko.json';

const resource =  {
    en: {
        translation: translationEn
    },
    ko: {
        translation: translationKo
    }
};


const instanceI18n = i18n.createInstance();

instanceI18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)  // https://www.npmjs.com/package/i18next-browser-languagedetector
  .use(HttpApi)  // https://github.com/i18next/i18next-http-backend
  
  .init({
    resources: resource,
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
  
 

export default instanceI18n;

