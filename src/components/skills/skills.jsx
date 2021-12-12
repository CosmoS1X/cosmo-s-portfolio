import React from 'react';
import figmaLogo from './img/figma-logo.svg';
import JSLogo from './img/JS-logo.png';
import HTMLLogo from './img/html-logo.png';
import CSSLogo from './img/css-logo.png';
import SASSLogo from './img/sass-logo.png';
import reactLogo from './img/react-logo.svg';
import reduxLogo from './img/redux-logo.png';
import bootstrapLogo from './img/bootstrap-logo.svg';
import webpackLogo from './img/webpack-logo.png';
import babelLogo from './img/babel-logo.png';
import gitLogo from './img/git-logo.png';
import './skills.scss';

const Skills = () => (
  <div className="wrapper">
    <section className="skills">
      <h2 className="skills__title title">Skills</h2>
      <div className="skills__content">
        <p className="skills__text">I work with technologies such as</p>
        <div className="cards">
          <div className="card">
            <div className="card__inner">
              <div className="card__logo">
                <img className="card__img" src={JSLogo} alt="js-logo" />
              </div>
              <div className="card__description">JavaScript</div>
            </div>
          </div>
          <div className="card">
            <div className="card__inner">
              <div className="card__logo">
                <img className="card__img" src={HTMLLogo} alt="html-logo" />
              </div>
              <div className="card__description">HTML</div>
            </div>
          </div>
          <div className="card">
            <div className="card__inner">
              <div className="card__logo">
                <img className="card__img" src={CSSLogo} alt="CSS-logo" />
              </div>
              <div className="card__description">CSS</div>
            </div>
          </div>
          <div className="card">
            <div className="card__inner">
              <div className="card__logo">
                <img className="card__img" src={SASSLogo} alt="sass-logo" />
              </div>
              <div className="card__description">SASS/SCSS</div>
            </div>
          </div>
          <div className="card">
            <div className="card__inner">
              <div className="card__logo">
                <img className="card__img" src={reactLogo} alt="react-logo" />
              </div>
              <div className="card__description">React</div>
            </div>
          </div>
          <div className="card">
            <div className="card__inner">
              <div className="card__logo">
                <img className="card__img" src={reduxLogo} alt="redux-logo" />
              </div>
              <div className="card__description">Redux</div>
            </div>
          </div>
          <div className="card">
            <div className="card__inner">
              <div className="card__logo">
                <img className="card__img" src={bootstrapLogo} alt="bootstrap-logo" />
              </div>
              <div className="card__description">Bootstrap</div>
            </div>
          </div>
          <div className="card">
            <div className="card__inner">
              <div className="card__logo">
                <img className="card__img" src={webpackLogo} alt="webpack-logo" />
              </div>
              <div className="card__description">Webpack</div>
            </div>
          </div>
          <div className="card">
            <div className="card__inner">
              <div className="card__logo">
                <img className="card__img" src={babelLogo} alt="babel-logo" />
              </div>
              <div className="card__description">Babel</div>
            </div>
          </div>
          <div className="card">
            <div className="card__inner">
              <div className="card__logo">
                <img className="card__img" src={figmaLogo} alt="figma-logo" />
              </div>
              <div className="card__description">Figma</div>
            </div>
          </div>
          <div className="card">
            <div className="card__inner">
              <div className="card__logo">
                <img className="card__img" src={gitLogo} alt="git-logo" />
              </div>
              <div className="card__description">Git</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Skills;
