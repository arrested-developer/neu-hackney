import React from "react"
import { Link } from "gatsby"
//import PropTypes from "prop-types"
import styled from "styled-components"

import logo from "../images/neu-logo-dark-transparent.png"
import hexagons from "../images/hexagons.png"

const NEUHeader = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100vw;
  background-color: ${({ theme }) => theme.dark_blue};
  @media ${({ theme }) => theme.break_ns} {
    background-image: url(${hexagons});
    background-repeat: no-repeat;
    background-position: 100% ${({ theme }) => theme.xl};
    background-size: 70%;
  }
  @media ${({ theme }) => theme.break_l} {
    background-size: 70%;
    background-position: 90% ${({ theme }) => theme.l};
  }
`

const Logo = styled.div`
  display: block;
  width: ${({ theme }) => theme.xl};
  height: ${({ theme }) => theme.xl};
  margin: ${({ theme }) => theme.m} ${({ theme }) => theme.m}
    ${({ theme }) => theme.m} ${({ theme }) => theme.l};
  @media ${({ theme }) => theme.break_ns} {
    width: ${({ theme }) => theme.xxl};
    height: ${({ theme }) => theme.xxl};
  }
  background: url(${logo});
  background-position: center;
  background-size: contain;
`

const Title = styled.div`
  font-family: Lexia, serif;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.l};
  margin-left: ${({ theme }) => theme.l};
`

const Nav = styled.nav`
  width: 100vw;
  background: ${({ theme }) => theme.cyan};
  padding: ${({ theme }) => theme.s} ${({ theme }) => theme.s}
    ${({ theme }) => theme.m} ${({ theme }) => theme.l};
`

const NavLink = styled(Link)`
  font-size: ${({ theme }) => theme.m};
  margin-right: ${({ theme }) => theme.m};
`

const NavBar = ({ children }) => {
  return (
    <Nav>
      {children.map(link => (
        <NavLink to={link.href}>{link.name}</NavLink>
      ))}
    </Nav>
  )
}

export { NEUHeader, Logo, Title, NavBar }
