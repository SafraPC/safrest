import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {messages} from '../locales'


i18n
  .use(LanguageDetector)
  .init({
    fallbackLng: 'pt-BR',
    debug: false,
    defaultNS:["translations"],
    ns:["translations"],
    resources:messages
  });


export default i18n;