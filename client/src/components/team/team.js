import React from "react"
import { Card, Heading, Position } from "./team.styles"

const TeamCard = ({ teamMember, position, ...props }) => (
  <Card {...props}>
    <Heading>{teamMember.node.title}</Heading>
    <Position color="black" bold>
      {position}
    </Position>
    <a href={`mailto:${teamMember.node.meta.neuhack_team_member_email}`}>
      {teamMember.node.meta.neuhack_team_member_email}
    </a>
  </Card>
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

export default ({ team, positions, ...props }) => {
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
        />
      ))}
    </ul>
  )
}
