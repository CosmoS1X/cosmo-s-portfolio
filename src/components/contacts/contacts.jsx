import React from 'react';
import { useTranslation } from 'react-i18next';
import mailIco from './img/mail.svg';
import phoneIco from './img/phone.svg';
import telegramIco from './img/telegram.svg';
import githubIco from './img/github.svg';
import './contacts.scss';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <section className="section" id="contacts">
      <div className="wrapper">
        <div className="contacts">
          <h2 className="section__title title">{t('nav.contacts')}</h2>
          <div className="contacts__content">
            <div className="contacts__text">
              <p>{t('contacts.more')}</p>
              <p>{t('contacts.welcome')}</p>
            </div>
            <div className="contacts__links">
              <a
                className="contacts__link"
                href="mailto:cosmo.stan@yandex.com"
                target="_blank"
                rel="noreferrer"
              >
                <img className="contacts__ico" src={mailIco} alt="mail-ico" />
              </a>
              <a className="contacts__link" href="tel:+79393993899">
                <img className="contacts__ico" src={phoneIco} alt="phone-ico" />
              </a>
              <a
                className="contacts__link"
                href="https://t.me/CosmoS1X"
                target="_blank"
                rel="noreferrer"
              >
                <img className="contacts__ico" src={telegramIco} alt="telegram-ico" />
              </a>
              <a
                className="contacts__link"
                href="https://github.com/CosmoS1X"
                target="_blank"
                rel="noreferrer"
              >
                <img className="contacts__ico" src={githubIco} alt="github-ico" />
              </a>
            </div>
            <div className="contacts__sublinks">
              <a className="contacts__sublink link" href="mailto:cosmo.stan@yandex.com">
                cosmo.stan@yandex.com
              </a>
              <a className="contacts__sublink link" href="tel:+79393993899">
                +7 (939) 399-38-99
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
