import React from 'react'
import { useTranslation } from 'react-i18next'

import './Contact.css'

function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact" id="contact">
      <div className="contact__image" />
      <div className="contact__info">
        <h2 className="contact__title">{t("contact-title")}</h2>
        <p className="contact__text">{t("contact-text")}</p>
      </div>
    </section>
  )
}

export default Contact
