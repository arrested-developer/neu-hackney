import React from "react"
import { Card, Heading, Position, Photo, Details } from "./team.styles"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const TeamCard = ({ teamMember, position, queryData, ...props }) => (
  <Card {...props}>
    <Photo>
      <Img fluid={queryData.headerLogo.childImageSharp.fluid} />
    </Photo>
    <Details>
      <Heading>{teamMember.node.title}</Heading>
      <Position color="black" bold>
        {position}
      </Position>
      <a href={`mailto:${teamMember.node.meta.neuhack_team_member_email}`}>
        {teamMember.node.meta.neuhack_team_member_email}
      </a>
    </Details>
  </Card>
)

export const AllTeamMembers = ({ team, positions, queryData, ...props }) => {
  const sortByPosition = team => {
    const sortedTeam = team
      .slice()
      .sort(
        (a, b) =>
          a.node.meta.neuhack_team_member_position -
          b.node.meta.neuhack_team_member_position
      )
    return sortedTeam
  }
  const positionReference = {}
  positions.edges.forEach(
    pos => (positionReference[pos.node.wordpress_id] = pos.node.name)
  )
  return (
    <ul>
      {sortByPosition(team.edges).map(teamMember => (
        <TeamCard
          key={teamMember.node.id}
          teamMember={teamMember}
          position={
            positionReference[teamMember.node.meta.neuhack_team_member_position]
          }
          queryData={queryData}
        />
      ))}
    </ul>
  )
}

export default ({ team, positions, ...props }) => (
  <StaticQuery
    query={graphql`
      query teamQuery {
        headerLogo: file(
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
    render={data => (
      <AllTeamMembers
        team={team}
        positions={positions}
        queryData={data}
        {...props}
      />
    )}
  />
)
