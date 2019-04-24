import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import uuidv4 from "uuid/v4"
import Img from "gatsby-image"

import {
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

import {
  NEUHeader,
  FlexRow,
  Logo,
  Title,
  BackgroundImageContainer,
  BackgroundImage,
  NavLink,
  Burger,
} from "./header.styles"

import { Facebook, Twitter } from "../shared/social"

import theme from "../../theme"

const Header = ({
  siteTitle,
  navLinks,
  data: { headerBackground, headerLogo },
}) => {
  const [opened, setOpened] = useState(false)
  return (
    <>
      <NEUHeader>
        <BackgroundImageContainer>
          <BackgroundImage fluid={headerBackground.childImageSharp.fluid} />
        </BackgroundImageContainer>
        <FlexRow>
          <Logo>
            <Img fluid={headerLogo.childImageSharp.fluid} fadeIn={false} />
          </Logo>
          <Title>{siteTitle}</Title>
        </FlexRow>
        <Navbar
          light
          expand="md"
          // match the left margin of the logo
          // 2 rem, minus 8px for the left pad on the first nav link
          style={{
            paddingLeft: "calc(1rem - 8px)",
            background: theme.cyan,
          }}
        >
          <NavbarToggler
            onClick={() => setOpened(!opened)}
            // keep toggle icon in line with logo
            style={{ marginLeft: "0.5rem" }}
          >
            <Burger />
          </NavbarToggler>
          <Collapse isOpen={opened} navbar>
            <Nav className="pl-2 pl-md-0 ml-0 mr-auto my-2 my-md-0" navbar>
              {navLinks.map(link => {
                if (Array.isArray(link.to)) {
                  return (
                    <UncontrolledDropdown
                      nav
                      inNavbar
                      className="mr-2 ml-0"
                      key={uuidv4()}
                    >
                      <DropdownToggle nav caret light="true">
                        {link.name}
                      </DropdownToggle>
                      <DropdownMenu>
                        {link.to.map(innerLink => (
                          <DropdownItem key={uuidv4()}>
                            <NavLink to={innerLink.to}>
                              {innerLink.name}
                            </NavLink>
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  )
                } else {
                  return (
                    <NavItem
                      className="my-1 my-md-0"
                      key={link.name.toLowerCase()}
                    >
                      <NavLink to={link.to}>{link.name}</NavLink>
                    </NavItem>
                  )
                }
              })}
            </Nav>
          </Collapse>
          <Nav
            className="mr-0 ml-auto"
            style={{
              position: "absolute",
              right: "1.5rem",
              top: "1rem",
              fontSize: "1rem",
              color: "white",
            }}
          >
            <NavItem className="mr-3">
              <Twitter href="https://twitter.com" title="Twitter" />
            </NavItem>
            <NavItem>
              <Facebook href="https://facebook.com" title="Facebook" />
            </NavItem>
          </Nav>
        </Navbar>
      </NEUHeader>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query headerQuery {
        headerLogo: file(
          relativePath: { eq: "neu-logo-dark-transparent.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        headerBackground: file(relativePath: { eq: "hexagons-header.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
)
