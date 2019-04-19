import React from "react"
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
      meta: { neuhack_team_member_email, neuhack_image_url },
    },
  },
  position,
  placeholder,
  ...props
}) => (
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
      <Heading>{title}</Heading>
      <Position color="black" bold>
        {position}
      </Position>
      <a href={`mailto:${neuhack_team_member_email}`}>
        {neuhack_team_member_email}
      </a>
    </Details>
  </Card>
)
