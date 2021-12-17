import React from 'react';
import Navbar from '../menu';
import Intro from '../intro';
import About from '../about';
import Skills from '../skills';
import Portfolio from '../portfolio';
import Contacts from '../contacts';
import './app.scss';

const App = () => (
  <div className="app">
    <header className="header">
      <Navbar />
    </header>
    <main className="main">
      <Intro />
      <About />
      <Skills />
      <Portfolio />
    </main>
    <footer className="footer">
      <Contacts />
    </footer>
  </div>
);

export default App;
