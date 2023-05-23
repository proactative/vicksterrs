import React from 'react'

import './Header.css'

function Header(props) {
  return (
    <header className="header">
      <div className="header__logo"/>

      <div className="header__nav" aria-label="якорные ссылки">
        <ul className="header__links">
          <li>
            <a className="header__link" href="#intro">
              Home
            </a>
          </li>
          <li>
            <a className="header__link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="header__link" href="#work">
              Work
            </a>
          </li>
          <li>
            <a className="header__link" href="#contact">
              Contact
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
