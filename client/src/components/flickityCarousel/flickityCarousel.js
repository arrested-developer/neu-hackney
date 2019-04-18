import React from "react"
import Flickity from "react-flickity-component"
import styled from "styled-components"

const FlickityContainer = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`

const defaultOptions = {
  initialIndex: 2,
  setGallerySize: true,
  wrapAround: false,
  contain: true,
  prevNextButtons: true,
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
