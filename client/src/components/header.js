import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

//import { Header } from "./header.styles"

const MyHeader = styled.header`
  background: ${props => props.theme.red};
`

const Header = ({ siteTitle }) => <MyHeader>HELLO</MyHeader>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
