import React from 'react';
import photo from './img/photo1.jpg';
import './intro.scss';

const Intro = () => (
  <div className="wrapper">
    <div className="intro">
      <div className="intro__header">
        <h1 className="intro__title">
          <span>Konstantin</span>
          <br />
          <span>Korovin</span>
        </h1>
        <div className="intro__subtitle">
          <span>Frontend Developer</span>
          <br />
          <span>34 years old, Kazan</span>
        </div>
        <div className="intro__lang">
          <span id="ru" className="intro__lang-switcher">
            RU
          </span>
          <span>&nbsp;|&nbsp;</span>
          <span id="eng" className="intro__lang-switcher intro__lang-switcher_active">
            ENG
          </span>
        </div>
      </div>
      <div className="intro__photo">
        <img className="intro__photo-item" src={photo} alt="pic" />
      </div>
    </div>
  </div>
);

export default Intro;
