import React from 'react';
import { useTranslation } from 'react-i18next';
import LangSwitcher from '../lang-switcher';
import photoDesc from './img/photo-desc.jpg';
import photoMob from './img/photo-mob.jpg';
import './intro.scss';

const Intro = () => {
  const { t } = useTranslation();

  return (
    <div className="intro" id="home">
      <div className="wrapper">
        <div className="intro__header">
          <h1 className="intro__title">
            {t('me.firstName')}
            <br />
            {t('me.lastName')}
          </h1>
          <div className="intro__subtitle">
            {t('me.profession')}
            <br />
            {t('me.age')}
            {', '}
            {t('me.location')}
          </div>
          <LangSwitcher type="desk" />
        </div>
        <div className="intro__photo">
          <picture>
            <source media="(max-width: 565px)" srcSet={photoMob} />
            <img className="intro__photo-item" src={photoDesc} alt="pic" />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Intro;
