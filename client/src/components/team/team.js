import React from "react"

import { StaticQuery, graphql } from "gatsby"

import TeamCard from "./teamCard"
import ElectionInfo from "./electionInfo"

import { TeamList } from "./team.styles"

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

export const AllTeamMembers = ({ team, positions, placeholder, ...props }) => {
  const positionReference = {}
  positions.edges.forEach(
    pos => (positionReference[pos.node.wordpress_id] = pos.node.name)
  )
  return (
    <TeamList {...props}>
      {sortByPosition(team.edges).map(teamMember => (
        <TeamCard
          key={teamMember.node.id}
          teamMember={teamMember}
          position={
            positionReference[teamMember.node.meta.neuhack_team_member_position]
          }
          placeholder={placeholder}
        />
      ))}
    </TeamList>
  )
}

export default ({ team, positions, ...props }) => {
  return (
    <StaticQuery
      query={graphql`
        query teamQuery {
          neuLogo: file(relativePath: { eq: "neu-logo-dark-transparent.png" }) {
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
          placeholder={data.neuLogo}
          {...props}
        />
      )}
    />
  )
}
