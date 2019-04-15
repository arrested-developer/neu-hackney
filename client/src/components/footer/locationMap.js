import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MapImg = styled(Img)`
  width: 100%;
  height: 180px;
`

export default props => (
  <StaticQuery
    query={graphql`
      query mapQuery {
        locationMap: file(relativePath: { eq: "location-map.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <MapImg fluid={data.locationMap.childImageSharp.fluid} {...props} />
    )}
  />
)
