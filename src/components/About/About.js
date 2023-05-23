import React from 'react'

import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about__photo" />
      <div className="about__info" >
        <h2 className="about__title">About me</h2>
        <div className="about__text">
          <p className="about__para">My name is Victoria, and I am a freelance commercial illustrator and character designer. Since 2019, I have been bringing ideas to life through illustrations, and my goal is always to create artwork that not only looks great but also delivers results for my clients.</p>
          <p className="about__para">Throughout my artistic journey, I have developed a deep love for character design, editorial illustration, branding, packaging, and technical illustration. These diverse areas have allowed me to explore different styles and pushed my creative boundaries.</p>  
          <p className="about__para">I thrive on collaboration and the opportunity to work with individuals and businesses who share a passion for creativity. My artistic approach is characterized by attention to detail, a keen eye for composition, and a commitment to delivering artwork that exceeds expectations. I strive to evoke emotion, spark imagination, and create a lasting impact through my illustrations.</p>    
        </div>
      </div>
    
    </section>
  )
}

export default About
