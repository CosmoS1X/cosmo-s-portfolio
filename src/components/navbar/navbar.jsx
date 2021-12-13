/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
    <div className="wrapper">
      <nav className="navbar" ref={navbar}>
        <div className="navbar__items">
          <div className="navbar__item">
            <a href="#home" className="navbar__link link">
              Home
            </a>
          </div>
          <div className="navbar__item">
            <a href="#about" className="navbar__link link">
              About me
            </a>
          </div>
          <div className="navbar__item">
            <a href="#skills" className="navbar__link link">
              Skills
            </a>
          </div>
          <div className="navbar__item">
            <a href="#portfolio" className="navbar__link link">
              Portfolio
            </a>
          </div>
          <div className="navbar__item">
            <a href="#contacts" className="navbar__link link">
              Contacts
            </a>
          </div>
        </div>
        <div className="navbar__close-button" onClick={() => menuHandler()}>
          <img src={closeIco} alt="close-ico" />
        </div>
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
      <div className="burger" onClick={() => menuHandler()}>
        <img src={burgerIco} alt="burger-ico" />
      </div>
    </div>
  );
};

export default Navbar;
