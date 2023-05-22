import React from 'react'

import Header from '../Header/Header'
import Intro from '../Intro/Intro'
import About from '../About/About';
import Works from '../Works/Works'
import Footer from '../Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <Intro />
        <About />
        {/* <Works /> */}
      </main>
      <Footer />
    </div>
   
  );
}

export default App;
