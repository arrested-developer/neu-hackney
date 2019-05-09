import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Carousel from "../carousel"

export const CarouselContainer = styled.div`
  width: 90%;
  height: 300px;
  margin: 0 auto;
  margin-top: -2rem;
  margin-bottom: 4rem;
`

const GalleryItem = styled.li`
  margin-left: 1rem;
  margin-right: 1rem;
  height: 300px;
  overflow: hidden;
`

export default props => (
  <StaticQuery
    query={graphql`
      query galleryQuery {
        one: file(relativePath: { eq: "antiracist.jpg" }) {
          childImageSharp {
            fixed(height: 300, width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        two: file(relativePath: { eq: "banner.jpg" }) {
          childImageSharp {
            fixed(height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        three: file(relativePath: { eq: "careforcalais.jpg" }) {
          childImageSharp {
            fixed(height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        four: file(relativePath: { eq: "two.jpg" }) {
          childImageSharp {
            fixed(height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => {
      const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
      }
      return (
        <CarouselContainer>
          <Carousel settings={settings}>
            <GalleryItem>
              <Img fixed={data.one.childImageSharp.fixed} />
            </GalleryItem>
            <GalleryItem>
              <Img fixed={data.two.childImageSharp.fixed} />
            </GalleryItem>
            <GalleryItem>
              <Img fixed={data.three.childImageSharp.fixed} />
            </GalleryItem>
          </Carousel>
        </CarouselContainer>
      )
    }}
  />
)
