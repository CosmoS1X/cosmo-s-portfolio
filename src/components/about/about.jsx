import React from 'react';
import { useTranslation } from 'react-i18next';
import './about.scss';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="section section_bgc_grey" id="about">
      <div className="wrapper">
        <div className="about">
          <h2 className="section__title title">{t('nav.about')}</h2>
          <div className="about__content">
            <p className="about__text">
              {t('about.p1')}
            </p>
            <p className="about__text">
              {t('about.p2')}
            </p>
            <p className="about__text">
              {t('about.p3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
