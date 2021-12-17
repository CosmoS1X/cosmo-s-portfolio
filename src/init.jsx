import React from 'react';
import i18n from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import App from './components/app';
import resources from './locales';
import './scss/index.scss';

export default async () => {
  const i18nInstance = i18n.createInstance();
  await i18nInstance
    .use(detector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en', // use en if detected lng is not available
      interpolation: {
        escapeValue: false,
      },
      resources,
    });

  return (
    <I18nextProvider i18m={i18nInstance}>
      <App />
    </I18nextProvider>
  );
};
