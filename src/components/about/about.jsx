import React from 'react';
import { useTranslation } from 'react-i18next';
import Fancybox from '../fancybox';
import certRus from './img/cert-rus.jpg';
import certEng from './img/cert-eng.jpg';
import './about.scss';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="section section_bgc_grey" id="about">
      <div className="wrapper">
        <div className="about">
          <h2 className="section__title title">{t('nav.about')}</h2>
          <div className="about__content">
            <p className="about__text">{t('about.p1')}</p>
            <p className="about__text">{t('about.p2')}</p>
            <p className="about__text">{t('about.p3')}</p>
            <p className="about__text">{t('about.p4')}</p>
          </div>
          <div className="about__certificates">
            <Fancybox options={{ infinite: false }}>
              <a data-fancybox="certificate" href={certEng}>
                <img className="about__img" src={certEng} alt="certificate-eng" />
              </a>
              <a data-fancybox="certificate" href={certRus}>
                <img className="about__img" src={certRus} alt="certificate-rus" />
              </a>
            </Fancybox>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
