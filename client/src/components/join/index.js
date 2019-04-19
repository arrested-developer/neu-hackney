import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { LogoContainer } from "./join.styles"

export default props => (
  <StaticQuery
    query={graphql`
      query logoQuery {
        logoImage: file(relativePath: { eq: "neu-logo-dark-transparent.png" }) {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <LogoContainer>
        <a href="https://neu.org.uk" target="_blank" rel="noopener noreferrer">
          <Img fluid={data.logoImage.childImageSharp.fluid} />
        </a>
      </LogoContainer>
    )}
  />
)
