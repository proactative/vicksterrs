import React from 'react'

import Header from '../Header/Header'
import Intro from '../Intro/Intro'
import About from '../About/About';
import Works from '../Works/Works'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Intro />
        <About />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
   
  );
}

export default App;
