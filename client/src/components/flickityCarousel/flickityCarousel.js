import React from "react"
import Flickity from "react-flickity-component"
import styled from "styled-components"

const defaultOptions = {
  initialIndex: 2,
  setGallerySize: true,
  wrapAround: false,
  contain: true,
  prevNextButtons: false,
  autoPlay: true,
}

export default ({ children, options, ...props }) => {
  return (
    <Flickity
      className={"carousel"}
      elementType={"div"}
      options={options || defaultOptions}
      disableImagesLoaded={false}
      reloadOnUpdate
    >
      {children}
    </Flickity>
  )
}
