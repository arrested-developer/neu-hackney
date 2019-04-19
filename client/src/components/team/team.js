import React from "react"

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

export default ({ team, positions, ...props }) => {
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
        />
      ))}
    </TeamList>
  )
}
