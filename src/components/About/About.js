import React from 'react'
import { useTranslation } from 'react-i18next'

import './About.css'

function About() {
  const { t } = useTranslation();

  return (
    <section className="about" id="about">
      <div className="about__photo" />
      <div className="about__info" >
        <h2 className="about__title">{t("about-title")}</h2>
        <div className="about__text">
          <p className="about__para">{t("para1")}</p>
          <p className="about__para about__para_last">{t("para2")}</p>  
          <p className="about__para about__para_last">{t("para3")}</p>    
        </div>
      </div>
    
    </section>
  )
}

export default About
