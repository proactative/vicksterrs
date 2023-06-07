import React from 'react'
import { useTranslation } from 'react-i18next'

import Section from '../Section/Section'
import DecorLine from '../DecorLine/DecorLine'
import PortfolioSlider from '../PortfolioSlider/PorfolioSlider'
import './Works.css'

function Works() {
  const { t } = useTranslation()

  return (
    <section className="works" id="work">
      <DecorLine />
      <h2 className="works__title">{t('work-title')}</h2>
      <div className="works__container">
        <Section title={t('section-title-1')} text={t('section-text-1')}>
          <PortfolioSlider>
            <div className="character character_first" />
            <div className="character character_second" />
            <div className="character character_third" />
            <div className="character character_fourth" />
            <div className="character character_fifth" />
            <div className="character character_sixth" />
          </PortfolioSlider>
        </Section>

        <Section title={t('section-title-2')} text={t('section-text-2')}>
          <PortfolioSlider>
            <div className="brand brand_first" />
            <div className="brand brand_second" />
            <div className="brand brand_third" />
            <div className="brand brand_fourth" />
          </PortfolioSlider>
        </Section>

        <Section title={t('section-title-3')} text={t('section-text-3')}>
          <PortfolioSlider>
            <div className="bookcover bookcover_first" />
            <div className="bookcover bookcover_second" />
            <div className="bookcover bookcover_third" />
            <div className="bookcover bookcover_fourth" />
            <div className="bookcover bookcover_fifth" />
            <div className="bookcover bookcover_sixth" />
          </PortfolioSlider>
        </Section>

        <Section title={t('section-title-4')} text={t('section-text-4')}>
          <PortfolioSlider>
            <div className="stickerpacks stickerpacks_first" />
            <div className="stickerpacks stickerpacks_second" />
            <div className="stickerpacks stickerpacks_third" />
            <div className="stickerpacks stickerpacks_fourth" />
            <div className="stickerpacks stickerpacks_fifth" />
            <div className="stickerpacks stickerpacks_sixth" />
            <div className="stickerpacks stickerpacks_seventh" />
          </PortfolioSlider>
        </Section>

        <Section title={t('section-title-5')} text={t('section-text-5')}>
          <PortfolioSlider>
            <div className="logos logos_first" />
            <div className="logos logos_second" />
            <div className="logos logos_third" />
          </PortfolioSlider>
        </Section>

        <Section title={t('section-title-6')} text={t('section-text-6')}>
          <PortfolioSlider>
            <div className="media media_first" />
            <div className="media media_second" />
            <div className="media media_third" />
            <div className="media media_fourth" />
            <div className="media media_fifth" />
            <div className="media media_sixth" />
            <div className="media media_seventh" />
            <div className="media media_eighth" />
          </PortfolioSlider>
        </Section>

        <Section title={t('section-title-7')} text={t('section-text-7')}>
          <PortfolioSlider>
            <div className="tech tech_first" />
            <div className="tech tech_second" />
            <div className="tech tech_third" />
            <div className="tech tech_fourth" />
            <div className="tech tech_fifth" />
            <div className="tech tech_sixth" />
            <div className="tech tech_seventh" />
            <div className="tech tech_fifth" />
            <div className="tech tech_sixth" />
            <div className="tech tech_seventh" />
            <div className="tech tech_eighth" />
            <div className="tech tech_ninth" />
            <div className="tech tech_tenth" />
          </PortfolioSlider>
        </Section>
      </div>
      <DecorLine />
    </section>
  )
}

export default Works
