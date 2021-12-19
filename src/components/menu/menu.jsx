import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
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

  const linkHandler = () => {
    navbar.current.classList.remove('navbar_active');
  };

  return (
    <div className="menu">
      <div className="menu__wrapper">
        <nav className="navbar" ref={navbar}>
          <div className="navbar__items">
            <div className="navbar__item">
              <Link
                className="link navbar__link"
                activeClass="navbar__link_active"
                to="home"
                spy
                smooth
                offset={-55}
                duration={500}
                onClick={linkHandler}
              >
                {t('nav.home')}
              </Link>
            </div>
            <div className="navbar__item">
              <Link
                className="link navbar__link"
                activeClass="navbar__link_active"
                to="about"
                spy
                smooth
                offset={-55}
                duration={500}
                onClick={linkHandler}
              >
                {t('nav.about')}
              </Link>
            </div>
            <div className="navbar__item">
              <Link
                className="link navbar__link"
                activeClass="navbar__link_active"
                to="skills"
                spy
                smooth
                offset={-55}
                duration={500}
                onClick={linkHandler}
              >
                {t('nav.skills')}
              </Link>
            </div>
            <div className="navbar__item">
              <Link
                className="link navbar__link"
                activeClass="navbar__link_active"
                to="portfolio"
                spy
                smooth
                offset={-55}
                duration={500}
                onClick={linkHandler}
              >
                {t('nav.portfolio')}
              </Link>
            </div>
            <div className="navbar__item">
              <Link
                className="link navbar__link"
                activeClass="navbar__link_active"
                to="contacts"
                spy
                smooth
                offset={-55}
                duration={500}
                onClick={linkHandler}
              >
                {t('nav.contacts')}
              </Link>
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
