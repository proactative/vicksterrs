import React from 'react'

import Section from '../Section/Section'
import DecorLine from '../DecorLine/DecorLine'
import PortfolioSlider from '../PortfolioSlider/PorfolioSlider'
import './Works.css'

function Works() {
  return (
    <section className="works" id="work">
      <DecorLine />
      <h2 className="works__title">Work</h2>
      <div className="works__container">
        
        <Section
          title="Character design"
          text="Creating unique and visually appealing characters for brands and merchandise."
        >
          <PortfolioSlider >
            <div className='character character_first' />
            <div className='character character_second' />
            <div className='character character_third' />
            <div className='character character_fourth' />
            <div className='character character_fifth' />
            <div className='character character_sixth' />
          </PortfolioSlider>

        </Section>

        <Section
          title="Branding Illustration"
          text="Illustrations to represent a brand's visual identity. They are used in packaging, menus, and websites to create a memorable brand image."
        >
          <PortfolioSlider >
            <div className='brand brand_first' />
            <div className='brand brand_second' />
            <div className='brand brand_third' />
            <div className='brand brand_fourth' />
          </PortfolioSlider>
        </Section>

        <Section
          title="Book Cover Illustration"
          text=" Designed to capture readers' attention, they convey the mood, themes, and key elements of the book, creating its visual representation."
        >
          <PortfolioSlider >
            <div className='bookcover bookcover_first' />
            <div className='bookcover bookcover_second' />
            <div className='bookcover bookcover_third' />
            <div className='bookcover bookcover_fourth' />
            <div className='bookcover bookcover_fifth' />
            <div className='bookcover bookcover_sixth' />
          </PortfolioSlider>
        </Section>

        <Section
          title="Stickerpacks"
          text="Stickerpacks consist of a collection of fun & expressive stickers or emojis. They allow individuals and brands to express emotions in a message."
        >
          <PortfolioSlider >
            <div className='stickerpacks stickerpacks_first' />
            <div className='stickerpacks stickerpacks_second' />
            <div className='stickerpacks stickerpacks_third' />
            <div className='stickerpacks stickerpacks_fourth' />
            <div className='stickerpacks stickerpacks_fifth' />
            <div className='stickerpacks stickerpacks_sixth' />
            <div className='stickerpacks stickerpacks_seventh' />
          </PortfolioSlider>
        </Section>

        <Section
          title="Logos"
          text="A logotype is a unique and visually distinctive symbol used to represent a brand or business. It serves as an instant visual identifier and plays a crucial role in brand recognition."
        >
          <PortfolioSlider >
            <div className='logos logos_first' />
            <div className='logos logos_second' />
            <div className='logos logos_third' />
          </PortfolioSlider>
        </Section>

        <Section
          title="Illustrations for media"
          text="Illustrations play a vital role in various forms of media, including newspapers, magazines, online articles, and social media posts. They bring visual interest, enhance storytelling, and capture the attention of the audience."
        >
          <PortfolioSlider >
            <div className='media media_first' />
            <div className='media media_second' />
            <div className='media media_third' />
          </PortfolioSlider>
        </Section>

        <Section
          title="Technical illustrations"
          text="Technical illustrations are used to visually explain mechanisms, systems, or processes related to vehicles. These illustrations require a high level of precision, accuracy, and attention to detail."
        >
          <PortfolioSlider >
            <div className='tech tech_first' />
            <div className='tech tech_second' />
            <div className='tech tech_third' />
            <div className='tech tech_fourth' />
            <div className='tech tech_fifth' />
            <div className='tech tech_sixth' />
            <div className='tech tech_seventh' />
            <div className='tech tech_fifth' />
            <div className='tech tech_sixth' />
            <div className='tech tech_seventh' />
            <div className='tech tech_eighth' />
            <div className='tech tech_ninth' />
            <div className='tech tech_tenth' />
          </PortfolioSlider>
        </Section>

      </div>
      <DecorLine />
    </section>
  )
}

export default Works
