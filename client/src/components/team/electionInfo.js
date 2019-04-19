import React from "react"

import { P, H3 } from "../shared/typography"
import { ButtonLink } from "../shared/buttons"

export default props => (
  <>
    <H3>Get Involved!</H3>
    <P>
      Why not get involved? You could join us as a school rep to support your
      colleagues, stand for election to attend national conference, or stand for
      election as an officer or committee member.
    </P>
    <ButtonLink href="/a/file/">Download Election Calendar</ButtonLink>
    <ButtonLink href="/a/file/">Download Nomination Form</ButtonLink>
    <ButtonLink href="/a/file/">Download Conference Nomination</ButtonLink>
  </>
)
