import React from "react"
import { Link } from "gatsby"
//import PropTypes from "prop-types"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Navbar as UnstyledNavbar } from "reactstrap"

import logo from "./neu-logo-dark-transparent.png"
import hexagons from "./hexagons.png"

const NEUHeader = styled.header`
  display: block;
  width: 100vw;
  background-color: ${({ theme }) => theme.dark_blue};
  @media ${({ theme }) => theme.break_ns} {
    background-image: url(${hexagons});
    background-repeat: no-repeat;
    background-position: 90% ${({ theme }) => theme.m};
    background-size: 50%;
  }
`

const Logo = styled.div`
  display: block;
  width: ${({ theme }) => theme.xl};
  height: ${({ theme }) => theme.xl};
  background: url(${logo});
  background-position: center;
  background-size: contain;
  margin-left: ${({ theme }) => theme.m};
`

const Title = styled.div`
  font-family: Lexia, serif;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  font-size: 1.4rem;
  margin-left: ${({ theme }) => theme.m};
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.m} 0;
`

const NavLink = styled(Link).attrs({
  className: "nav-link",
})`
  margin-right: ${({ theme }) => theme.m};
  color: white !important;
  font-family: "Arial Bold", "Arial", sans-serif;
`

const ExternalNavLink = styled.a.attrs({})`
  color: white;
  margin-right: 1rem;
`

const SocialLink = ({ icon, alt, href }) => (
  <ExternalNavLink href={href}>
    <FontAwesomeIcon icon={icon} />
  </ExternalNavLink>
)

export { NEUHeader, Logo, Title, FlexRow, NavLink, SocialLink }
