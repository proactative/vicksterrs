import React from 'react'
import { useTranslation } from 'react-i18next'

import './Intro.css'

function Intro() {
  const { t } = useTranslation()

  return (
    <section className="intro" id="intro">
      <div className="intro__info">
        <h1 className="intro__title">{t('intro-title')}</h1>
        <p className="intro__text">{t('intro-text')}</p>
      </div>
      <div className="intro__image" />
    </section>
  )
}

export default Intro
