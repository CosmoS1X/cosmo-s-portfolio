import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import burgerIco from './img/burger.svg';
import closeIco from './img/close.svg';
import LangSwitcher from '../lang-switcher';
import './menu.scss';

const Menu = () => {
  const navbar = useRef();
  const { t } = useTranslation();

  const menuHandler = () => {
    navbar.current.classList.toggle('navbar_active');
  };

  return (
    <div className="menu">
      <div className="menu__wrapper">
        <nav className="navbar" ref={navbar}>
          <div className="navbar__items">
            <div className="navbar__item">
              <a href="#home" className="navbar__link link" onClick={menuHandler}>
                {t('nav.home')}
              </a>
            </div>
            <div className="navbar__item">
              <a href="#about" className="navbar__link link" onClick={menuHandler}>
                {t('nav.about')}
              </a>
            </div>
            <div className="navbar__item">
              <a href="#skills" className="navbar__link link" onClick={menuHandler}>
                {t('nav.skills')}
              </a>
            </div>
            <div className="navbar__item">
              <a href="#portfolio" className="navbar__link link" onClick={menuHandler}>
                {t('nav.portfolio')}
              </a>
            </div>
            <div className="navbar__item">
              <a href="#contacts" className="navbar__link link" onClick={menuHandler}>
                {t('nav.contacts')}
              </a>
            </div>
          </div>
          <button className="menu__button menu__button_no-bg" type="button" onClick={menuHandler}>
            <img src={closeIco} alt="close-ico" />
          </button>
          <LangSwitcher type="mob" />
          <div className="splitter" />
        </nav>
        <button className="menu__button menu__button_no-bg" type="button" onClick={menuHandler}>
          <img src={burgerIco} alt="burger-ico" />
        </button>
      </div>
    </div>
  );
};

export default Menu;
