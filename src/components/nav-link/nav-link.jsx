import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import './nav-link.scss';

const NavLink = ({ element }) => {
  const { t } = useTranslation();

  const closeMenuHandler = () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.remove('navbar_active');
  };

  return (
    <Link
      className="link navbar__link"
      activeClass="navbar__link_active"
      to={element}
      spy
      smooth
      offset={-55}
      duration={500}
      onClick={closeMenuHandler}
    >
      {t(`nav.${element}`)}
    </Link>
  );
};

export default NavLink;
