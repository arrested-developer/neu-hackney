import React from "react"
import { Link } from "gatsby"
//import PropTypes from "prop-types"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Navbar as UnstyledNavbar } from "reactstrap"

import logo from "./neu-logo-dark-transparent.png"
import hexagons from "./hexagons.png"

export const NEUHeader = styled.header`
  display: block;
  width: 100vw;
  background-color: ${({ theme }) => theme.dark_blue};
`
// removed from above:
// @media ${({ theme }) => theme.break_ns} {
//   background-image: url(${hexagons});
//   background-repeat: no-repeat;
//   background-position: 90% ${({ theme }) => theme.m};
//   background-size: 50%;
// }

export const Logo = styled.div`
  display: block;
  width: ${({ theme }) => theme.xl};
  height: ${({ theme }) => theme.xl};
  margin-left: ${({ theme }) => theme.m};
`
// removed from above:
// background: url(${logo});
// background-position: center;
// background-size: contain;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: red;
`

export const Title = styled.div`
  font-family: Lexia, serif;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  font-size: 1.4rem;
  margin-left: ${({ theme }) => theme.m};
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.m} 0;
`

export const NavLink = styled(Link).attrs({
  className: "nav-link",
})`
  margin-right: ${({ theme }) => theme.m};
  font-family: "Arial Bold", "Arial", sans-serif;
`

export const ExternalNavLink = styled.a.attrs({})`
  color: white;
  margin-right: 1rem;
`

export const SocialLink = ({ icon, alt, href }) => (
  <ExternalNavLink href={href}>
    <FontAwesomeIcon icon={icon} />
  </ExternalNavLink>
)
