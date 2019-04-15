import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { MapImg } from "./footer.styles"
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
