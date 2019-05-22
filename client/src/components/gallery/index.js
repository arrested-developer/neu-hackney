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
      console.log(data)
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
              <GalleryItem>
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
