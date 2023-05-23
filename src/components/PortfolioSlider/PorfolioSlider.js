import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './PortfolioSlider.css'

function PortfolioSlider(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true
  }

  return (
    <Slider {...settings}>
      {props.children}
    </Slider>
  )
}

export default PortfolioSlider
