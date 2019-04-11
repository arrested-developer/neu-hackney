import React from "react"

import {
  Title,
  NavLink,
  SocialLink,
  NEUHeader,
  Logo,
  FlexRow,
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

import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default class Header extends React.Component {
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
    const { siteTitle, navLinks } = this.props
    return (
      <>
        <NEUHeader>
          <FlexRow>
            <Logo />
            <Title>{siteTitle}</Title>
          </FlexRow>
          <Navbar color="info" light expand="md">
            <NavbarToggler onClick={this.toggle} />
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
                right: 0,
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
