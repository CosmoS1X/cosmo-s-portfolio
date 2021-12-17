import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import './lang-switcher.scss';

const LangSwitcher = ({ type }) => {
  const { i18n } = useTranslation();
  const ruLangBtn = useRef();
  const enLangBtn = useRef();

  const addLangBtnClasses = (lang) => cn({
    button: true,
    'button_no-bg': true,
    'lang-switcher__button': true,
    'lang-switcher__button_active': i18n.language === lang,
  });

  const langHandler = (lang) => {
    i18n.changeLanguage(lang);

    switch (lang) {
      case 'ru':
        enLangBtn.current.classList.remove('lang-switcher__button_active');
        ruLangBtn.current.classList.add('lang-switcher__button_active');
        break;
      default:
        ruLangBtn.current.classList.remove('lang-switcher__button_active');
        enLangBtn.current.classList.add('lang-switcher__button_active');
        break;
    }
  };

  return (
    <div className={`lang-switcher lang-switcher_${type}`}>
      <button
        className={addLangBtnClasses('ru')}
        type="button"
        ref={ruLangBtn}
        onClick={() => langHandler('ru')}
      >
        RU
      </button>
      <span>&nbsp;|&nbsp;</span>
      <button
        type="button"
        className={addLangBtnClasses('en')}
        ref={enLangBtn}
        onClick={() => langHandler('en')}
      >
        ENG
      </button>
    </div>
  );
};

export default LangSwitcher;
