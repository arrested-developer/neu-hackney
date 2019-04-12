import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
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

const Header = ({ siteTitle, navLinks, data }) => {
  const [opened, setOpened] = useState(false)
  return (
    <>
      <NEUHeader>
        <BackgroundImageContainer>
          <BackgroundImage
            fluid={data.headerBackground.childImageSharp.fluid}
          />
        </BackgroundImageContainer>
        <FlexRow>
          <Logo>
            <Img fluid={data.headerLogo.childImageSharp.fluid} />
          </Logo>
          <Title>{siteTitle}</Title>
        </FlexRow>
        <Navbar color="info" light expand="md" className="pl-4">
          <NavbarToggler onClick={() => setOpened(!opened)}>
            <Burger />
          </NavbarToggler>
          <Collapse isOpen={opened} navbar>
            <Nav className="pl-0 ml-0 mr-auto my-2 my-md-0" navbar>
              {navLinks.map(link => {
                if (Array.isArray(link.to)) {
                  return (
                    <UncontrolledDropdown nav inNavbar className="mr-2 ml-0">
                      <DropdownToggle nav caret light>
                        {link.name}
                      </DropdownToggle>
                      <DropdownMenu>
                        {link.to.map(innerLink => (
                          <DropdownItem>
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
                    <NavItem className="my-1 my-md-0">
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
              right: "2rem",
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
              ...GatsbyImageSharpFluid
            }
          }
        }
        headerBackground: file(relativePath: { eq: "hexagons-header.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
)
