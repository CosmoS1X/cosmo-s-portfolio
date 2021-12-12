import React from 'react';
import './navbar.scss';

const Navbar = () => (
  <div className="wrapper">
    <nav className="navbar">
      <div className="navbar__items">
        <div className="navbar__item">
          <a href="#!" className="navbar__link link">
            Home
          </a>
        </div>
        <div className="navbar__item">
          <a href="#!" className="navbar__link link">
            About me
          </a>
        </div>
        <div className="navbar__item">
          <a href="#!" className="navbar__link link">
            Skills
          </a>
        </div>
        <div className="navbar__item">
          <a href="#!" className="navbar__link link">
            Portfolio
          </a>
        </div>
        <div className="navbar__item">
          <a href="#!" className="navbar__link link">
            Contacts
          </a>
        </div>
      </div>
      <div className="splitter" />
    </nav>
  </div>
);

export default Navbar;
