import React from "react"
import { StaticQuery, graphql } from "gatsby"

import {
  Card,
  Heading,
  Position,
  Photo,
  TeamMemberPhoto,
  Details,
} from "./team.styles"

export default ({
  teamMember: {
    node: {
      title,
      positions,
      meta: { neuhack_team_member_email, neuhack_image_url },
    },
  },
  ...props
}) => {
  return (
    <StaticQuery
      query={graphql`
        query teamQuery {
          placeholder: file(
            relativePath: { eq: "neu-logo-dark-transparent.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
      `}
      render={({ placeholder }) => (
        <Card {...props}>
          <Photo>
            {neuhack_image_url ? (
              <TeamMemberPhoto
                fluid={neuhack_image_url.localFile.childImageSharp.fluid}
              />
            ) : (
              <TeamMemberPhoto fluid={placeholder.childImageSharp.fluid} />
            )}
          </Photo>
          <Details>
            <Heading color="blue">{title}</Heading>
            <Position color="blue_grey" bold>
              {positions.map((pos, i) => (
                <span key={pos.wordpress_id}>{`${pos.name}${
                  i === 0 && positions.length > 1 ? ", " : ""
                }`}</span>
              ))}
            </Position>
            <a href={`mailto:${neuhack_team_member_email}`}>
              {neuhack_team_member_email}
            </a>
          </Details>
        </Card>
      )}
    />
  )
}
