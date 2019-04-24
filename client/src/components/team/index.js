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

export default ({ team, ...props }) => {
  return (
    <>
      <TeamList {...props}>
        {sortByPosition(team.edges).map(teamMember => (
          <TeamCard key={teamMember.node.id} teamMember={teamMember} />
        ))}
      </TeamList>
      <ElectionInfo />
    </>
  )
}
