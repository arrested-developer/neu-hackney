import React from "react"
import { Link } from "gatsby"
//import PropTypes from "prop-types"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Img from "gatsby-image"

import { faBars } from "@fortawesome/free-solid-svg-icons"

export const NEUHeader = styled.header`
  display: block;
  width: 100vw;
  background-color: ${({ theme }) => theme.dark_blue};
  padding-top: 6rem;
  font-family: ${({ theme }) => theme.body};
  font-weight: 500;
  @media ${({ theme }) => theme.break_ns} {
    padding-top: 10rem;
  }
`

export const Logo = styled.div`
  display: block;
  width: ${({ theme }) => theme.xl};
  height: ${({ theme }) => theme.xl};
  margin-left: ${({ theme }) => theme.m};
  @media ${({ theme }) => theme.break_ns} {
    width: ${({ theme }) => theme.xxl};
    height: ${({ theme }) => theme.xxl};
  }
`

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 6rem;
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  background-color: ${({ theme }) => theme.dark_blue};
  @media ${({ theme }) => theme.break_ns} {
    height: 10rem;
  }
`

export const BackgroundImage = styled(Img).attrs({
  fadeIn: false,
})`
  width: 50%;
  max-width: 500px;
  margin-right: 0;
  margin-left: auto;
  margin-top: 2rem;
  @media ${({ theme }) => theme.break_ns} {
    margin-top: 1rem;
    width: 60%;
    max-width: 700px;
  }
`

export const Title = styled.div`
  font-family: Lexia, serif;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
  font-size: 1.5rem;
  margin-left: ${({ theme }) => theme.m};
  @media ${({ theme }) => theme.break_ns} {
    font-size: 2rem;
    margin-left: ${({ theme }) => theme.l};
  }
`

export const FlexRow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.m} 0;
  z-index: 1;
`

export const NavLink = styled(Link).attrs({
  className: "nav-link",
})`
  margin-right: ${({ theme }) => theme.m};
`

export const Burger = () => (
  <FontAwesomeIcon
    icon={faBars}
    style={{
      fontSize: "1.5rem",
      color: "white",
    }}
  />
)
