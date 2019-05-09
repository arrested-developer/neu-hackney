import React from "react"
import Slider from "react-slick"

import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

export default ({ settings, children }) => {
  return <Slider {...settings}>{children}</Slider>
}
