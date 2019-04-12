import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {
  Title,
  NavLink,
  SocialLink,
  NEUHeader,
  Logo,
  FlexRow,
  BackgroundImageContainer,
  BackgroundImage,
} from "./header.styles"

import {
  NavbarToggler,
  Collapse,
  Navbar,
  Nav,
  NavItem,
  DropdownMenu,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
} from "reactstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    const { siteTitle, navLinks, data } = this.props
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
          <Navbar color="info" light expand="md" style={{ marginTop: "6rem" }}>
            <NavbarToggler onClick={this.toggle}>
              <FontAwesomeIcon
                icon={faBars}
                style={{
                  fontSize: "1.5rem",
                  color: "white",
                }}
              />
            </NavbarToggler>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-0 mr-auto" navbar>
                {navLinks.map(link => (
                  <NavItem>
                    <NavLink to={link.to}>{link.name}</NavLink>
                  </NavItem>
                ))}
                {/* <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret light>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
              </Nav>
            </Collapse>
            <Nav
              className="mr-0 ml-auto"
              style={{
                position: "absolute",
                right: "0.5rem",
                top: "1rem",
                fontSize: "1.25rem",
              }}
            >
              <NavItem>
                <SocialLink href="https://twitter.com" icon={faTwitter} />
              </NavItem>
              <NavItem>
                <SocialLink href="https://twitter.com" icon={faFacebookF} />
              </NavItem>
            </Nav>
          </Navbar>
        </NEUHeader>
      </>
    )
  }
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
