import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"

export const ExternalNavLink = styled.a.attrs({})`
  color: white;
`

export const SocialLink = ({ icon, title, href }) => (
  <ExternalNavLink href={href} title={title}>
    <FontAwesomeIcon icon={icon} />
  </ExternalNavLink>
)

export const Facebook = ({ href, title }) => (
  <ExternalNavLink href={href} title={title}>
    <FontAwesomeIcon icon={faFacebookF} />
  </ExternalNavLink>
)

export const Twitter = ({ href, title }) => (
  <ExternalNavLink href={href} title={title}>
    <FontAwesomeIcon icon={faTwitter} />
  </ExternalNavLink>
)
