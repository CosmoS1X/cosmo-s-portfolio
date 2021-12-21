import React, { useRef } from 'react';
import burgerIco from './img/burger.svg';
import closeIco from './img/close.svg';
import LangSwitcher from '../lang-switcher';
import NavLink from '../nav-link';
import './menu.scss';

const Menu = () => {
  const navbar = useRef();

  const slideMenuHandler = () => {
    navbar.current.classList.toggle('navbar_active');
  };

  return (
    <div className="menu">
      <div className="menu__wrapper">
        <nav className="navbar" ref={navbar}>
          <div className="navbar__links">
            <NavLink element="home" />
            <NavLink element="about" />
            <NavLink element="skills" />
            <NavLink element="portfolio" />
            <NavLink element="contacts" />
          </div>
          <button className="menu__button menu__button_no-bg" type="button" onClick={slideMenuHandler}>
            <img src={closeIco} alt="close-ico" />
          </button>
          <LangSwitcher type="mob" />
          <div className="splitter" />
        </nav>
        <button className="menu__button menu__button_no-bg" type="button" onClick={slideMenuHandler}>
          <img src={burgerIco} alt="burger-ico" />
        </button>
      </div>
    </div>
  );
};

export default Menu;
