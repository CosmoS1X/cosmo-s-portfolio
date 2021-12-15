import React, { useRef } from 'react';
import burgerIco from './img/burger.svg';
import closeIco from './img/close.svg';
import './navbar.scss';

const Navbar = () => {
  const navbar = useRef();

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
                Home
              </a>
            </div>
            <div className="navbar__item">
              <a href="#about" className="navbar__link link" onClick={menuHandler}>
                About me
              </a>
            </div>
            <div className="navbar__item">
              <a href="#skills" className="navbar__link link" onClick={menuHandler}>
                Skills
              </a>
            </div>
            <div className="navbar__item">
              <a href="#portfolio" className="navbar__link link" onClick={menuHandler}>
                Portfolio
              </a>
            </div>
            <div className="navbar__item">
              <a href="#contacts" className="navbar__link link" onClick={menuHandler}>
                Contacts
              </a>
            </div>
          </div>
          <button
            className="menu__button menu__button_no-bg"
            type="button"
            onClick={menuHandler}
          >
            <img src={closeIco} alt="close-ico" />
          </button>
          <div className="navbar__lang">
            <span id="ru" className="navbar__lang-switcher">
              RU
            </span>
            <span>&nbsp;|&nbsp;</span>
            <span id="eng" className="navbar__lang-switcher navbar__lang-switcher_active">
              ENG
            </span>
          </div>
          <div className="splitter" />
        </nav>
        <button
          className="menu__button menu__button_no-bg"
          type="button"
          onClick={menuHandler}
        >
          <img src={burgerIco} alt="burger-ico" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
