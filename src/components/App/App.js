import React from 'react'
import { useEffect } from 'react'
import i18next from 'i18next';

import Header from '../Header/Header'
import Intro from '../Intro/Intro'
import About from '../About/About';
import Works from '../Works/Works'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import './App.css';

function App() {
  
  useEffect(() => {
    const language = sessionStorage?.getItem('i18nextLng')
    if (language === "ru") {
      sessionStorage.setItem('i18nextLng', 'ru')
    } else {
      sessionStorage.setItem('i18nextLng', 'en') 
    }
    
  }, [])

  const setLanguageEN = () => {
    sessionStorage.setItem('i18nextLng', 'en')
    i18next.changeLanguage("en");
  }

  const setLanguageRU = () => {
    sessionStorage.setItem('i18nextLng', 'ru')
    i18next.changeLanguage("ru");
  }

  return (
    <div className="app">
      <Header setLanguageEN={setLanguageEN} setLanguageRU={setLanguageRU}/>
      <main className="app__main">
          {/* <Intro />  */}
          {/* <About /> */}
        {/*<Works />
        <Contact />  */}
      </main>
      {/* <Footer /> */}
    </div>
   
  );
}

export default App;
