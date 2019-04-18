import React from "react"
import { H3 } from "../shared/typography"

const TeamCard = ({ teamMember, ...props }) => (
  <li {...props}>
    <H3>{teamMember.node.title}</H3>
  </li>
)

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

export default ({ team, ...props }) => (
  <ul>
    {sortByPosition(team.edges).map(teamMember => (
      <TeamCard key={teamMember.node.id} teamMember={teamMember} />
    ))}
  </ul>
)
