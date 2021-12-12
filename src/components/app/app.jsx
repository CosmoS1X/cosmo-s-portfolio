import React from 'react';
import Navbar from '../navbar';
import Intro from '../intro';
import About from '../about';
import Skills from '../skills';
import Portfolio from '../portfolio';
import Contacts from '../contacts';
import './app.scss';

const App = () => (
  <div className="app">
    <header>
      <Navbar />
    </header>
    <main>
      <Intro />
      <About />
      <Skills />
      <Portfolio />
    </main>
    <footer>
      <Contacts />
    </footer>
  </div>
);

export default App;
