import React from "react"

import MailingList from "./mailingList"
import LocationMap from "./locationMap"
import ContactDetails from "./contactDetails"

import {
  Footer,
  FooterSection,
  LinkList,
  FooterHeading,
  LinkItem,
  Link,
} from "./footer.styles"
import { H2 } from "../shared/typography"
import { Facebook, Twitter } from "../shared/social"

const Section = ({ title, children, ...props }) => (
  <FooterSection {...props}>
    <FooterHeading>
      <H2>{title}</H2>
    </FooterHeading>
    {children}
  </FooterSection>
)

export default ({ navLinks }) => {
  return (
    <Footer>
      <Section title="Links" maxWidth="14rem">
        <LinkList>
          {navLinks.map(link => {
            if (Array.isArray(link.to)) {
              return (
                <>
                  <LinkItem>{link.name}</LinkItem>
                  <LinkList indent>
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
      </Section>
      <Section title="Mailing List" maxWidth="300px">
        <MailingList />
      </Section>
      <Section title="Map">
        <LocationMap />
      </Section>
      <Section title="Contact">
        <ContactDetails />
      </Section>
      <div
        style={{
          //width: "calc(100% - 4rem)",
          width: "100%",
          margin: "0 auto",
          borderTop: "1px solid rgba(255,255,255,0.75)",
          paddingTop: "1rem",
          marginTop: "2rem",
        }}
      >
        <nav
          style={{
            fontSize: "1.5rem",
            color: "white",
            textAlign: "right",
          }}
        >
          <Twitter
            href="https://twitter.com"
            title="Twitter"
            style={{ marginRight: "1rem" }}
          />
          <Facebook href="https://facebook.com" title="Facebook" />
        </nav>
      </div>
    </Footer>
  )
}
