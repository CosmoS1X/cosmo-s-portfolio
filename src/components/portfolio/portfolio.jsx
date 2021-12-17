import React from 'react';
import { useTranslation } from 'react-i18next';
import './portfolio.scss';

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <section className="section section_bgc_grey" id="portfolio">
      <div className="wrapper">
        <div className="portfolio">
          <h2 className="section__title title">{t('nav.portfolio')}</h2>
          <div className="portfolio__content">{t('portfolio.text')}</div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
