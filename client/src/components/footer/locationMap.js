import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { MapContainer } from "./footer.styles"
import { Img } from "../shared/images"
import { ExternalLinkButton } from "../shared/linksAndButtons"

export default props => (
  <StaticQuery
    query={graphql`
      query mapQuery {
        locationMap: file(relativePath: { eq: "location-map.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_noBase64
              sizes
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <MapContainer {...props}>
          <Img
            fluid={{
              ...data.locationMap.childImageSharp.fluid,
              aspectRatio: 4 / 3,
            }}
          />
          <ExternalLinkButton
            right
            href="https://www.google.com/maps/place/14+Florfield+Rd,+London/@51.54409,-0.0586262,18z/data=!3m1!4b1!4m5!3m4!1s0x48761ce574c1bc9f:0x6ef4e4a647573dbc!8m2!3d51.54409!4d-0.0575292"
          >
            View larger map
          </ExternalLinkButton>
        </MapContainer>
      </>
    )}
  />
)
