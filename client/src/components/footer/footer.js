import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import {
  Footer,
  FooterLinks,
  LinkList,
  FooterHeading,
  LinkItem,
} from "./footer.styles"
import { H2 } from "../shared/headings"

export default ({ navLinks }) => {
  return (
    <Footer>
      <FooterLinks>
        <FooterHeading>
          <H2>Links</H2>
        </FooterHeading>
        <LinkList>
          {navLinks.map(link => {
            if (Array.isArray(link.to)) {
              return (
                <>
                  <LinkItem>{link.name}</LinkItem>
                  <LinkList>
                    {link.to.map(innerLink => (
                      <LinkItem>
                        <Link to={innerLink.to}>{innerLink.name}</Link>
                      </LinkItem>
                    ))}
                  </LinkList>
                </>
              )
            } else {
              return (
                <LinkItem>
                  <Link to={link.to}>{link.name}</Link>
                </LinkItem>
              )
            }
          })}
        </LinkList>
      </FooterLinks>
    </Footer>
  )
}
