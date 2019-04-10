//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { NEUHeader, Logo, Title, NavBar } from "./header.styles"

const Header = ({ siteTitle, navLinks }) => (
  <NEUHeader>
    <Logo />
    <Title>{siteTitle}</Title>
    <NavBar>{navLinks}</NavBar>
  </NEUHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
