import React from 'react'

import './Section.css'

function Section(props) {
  return (
    <div className="section">
      <h3 className="section__title">{props.title}</h3>
      <p className="section__text">{props.text}</p>
      {props.children}
    </div>
  )
}

export default Section
