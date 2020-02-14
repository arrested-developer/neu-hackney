import React from "react"

import { P, H3 } from "../shared/text"
import { ExternalLinkButton } from "../shared/linksAndButtons"

export default ({ settings, ...props }) => {
  const {
    node: {
      meta: { electionCalendar, nominationForm, conferenceNomination },
    },
  } = settings.edges[0]
  console.log(electionCalendar)
  return (
    <>
      <H3>Get Involved!</H3>
      <P>
        Why not get involved? You could join us as a school rep to support your
        colleagues, stand for election to attend national conference, or stand
        for election as an officer or committee member.
      </P>
      {electionCalendar && electionCalendar.localFile && (
        <ExternalLinkButton href={electionCalendar.localFile.publicURL}>
          Download Election Calendar
        </ExternalLinkButton>
      )}
      {nominationForm && nominationForm.localFile && (
        <ExternalLinkButton href={nominationForm.localFile.publicURL}>
          Download Nomination Form
        </ExternalLinkButton>
      )}
      {conferenceNomination && conferenceNomination.localFile && (
        <ExternalLinkButton href={conferenceNomination.localFile.publicURL}>
          Download Conference Nomination Form
        </ExternalLinkButton>
      )}
    </>
  )
}
