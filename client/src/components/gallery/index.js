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
  height: 300px;
  overflow: hidden;
  max-width: 70vw;
`

export default props => (
  <StaticQuery
    query={graphql`
      query gallery {
        allWordpressWpGallery {
          edges {
            node {
              id
              meta {
                neuhack_image_alt
                neuhack_image_url {
                  id
                  localFile {
                    id
                    childImageSharp {
                      fixed(height: 300) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              }
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
        <CarouselContainer {...props}>
          <Carousel settings={settings}>
            {data.allWordpressWpGallery.edges.map(image => (
              <GalleryItem key={image.node.id}>
                <Img
                  fixed={
                    image.node.meta.neuhack_image_url.localFile.childImageSharp
                      .fixed
                  }
                />
              </GalleryItem>
            ))}
          </Carousel>
        </CarouselContainer>
      )
    }}
  />
)
