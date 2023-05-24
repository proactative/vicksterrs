import React from 'react'
import { useTranslation } from 'react-i18next'

import './Header.css'

function Header(props) {

  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header__logo"/>

      <div className="header__nav" aria-label="якорные ссылки">
        <ul className="header__links">
          <li>
            <a className="header__link" href="#intro">
            {t("home")}
            </a>
          </li>
          <li>
            <a className="header__link" href="#about">
            {t("about")}
            </a>
          </li>
          <li>
            <a className="header__link" href="#work">
            {t("work")}
            </a>
          </li>
          <li>
            <a className="header__link" href="#contact">
            {t("contact")}
            </a>
          </li>
        </ul>

        <div className="header__lang-toggle">
          <button className="header__lang-btn" type="button" onClick={props.setLanguageEN}>
            ENG
          </button>
          <span>|</span>
          <button className="header__lang-btn" type="button" onClick={props.setLanguageRU}>
            RU
          </button>
        </div>

      </div>
    </header>
  )
}

export default Header
