import React from 'react'

import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__contacts">
          <li>
            <a
              href="mailto:vicktoria.syrcova@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="footer__contact-item"
            >
              <span className="footer__contact-icon footer__contact-icon_email" />
            </a>
          </li>

          <li>
            <a
              href="https://instagram.com/vicksterrs.art"
              target="_blank"
              rel="noreferrer"
              className="footer__contact-item"
            >
              <span className="footer__contact-icon footer__contact-icon_instagram" />
            </a>
          </li>

          <li>
            <a
              href="https://t.me/vicksterrs"
              target="_blank"
              rel="noreferrer"
              className="footer__contact-item"
            >
              <span className="footer__contact-icon footer__contact-icon_telegram" />
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/vicksterrs"
              target="_blank"
              rel="noreferrer"
              className="footer__contact-item"
            >
              <span className="footer__contact-icon footer__contact-icon_twitter" />
            </a>
          </li>

          <li>
            <a
              href="https://behance.net/vicksterrs"
              target="_blank"
              rel="noreferrer"
              className="footer__contact-item"
            >
              <span className="footer__contact-icon footer__contact-icon_behance" />
            </a>
          </li>

        </ul>

        <p className="footer__copyright">Copyright 2023 Vicksterrs</p>
      </div>
    </footer>
  )
}

export default Footer
