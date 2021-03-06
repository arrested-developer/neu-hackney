import React from "react"

import TeamCard from "./teamCard"
import ElectionInfo from "./electionInfo"

import { TeamListFlex } from "./team.styles"

const sortByPosition = team => {
  const sortedTeam = team.slice().sort((a, b) => {
    if (a.id === undefined) {
      a = a.node
      b = b.node
    }
    return (
      a.meta.neuhack_team_member_position - b.meta.neuhack_team_member_position
    )
  })
  return sortedTeam
}

export default ({ team, noInfo = false, settings, ...props }) => {
  return (
    <>
      <TeamListFlex {...props}>
        {sortByPosition(team.edges || team).map(teamMember => {
          if (teamMember.id === undefined) teamMember = teamMember.node
          return <TeamCard key={teamMember.id} teamMember={teamMember} />
        })}
      </TeamListFlex>
      {noInfo === false && <ElectionInfo settings={settings} />}
    </>
  )
}
