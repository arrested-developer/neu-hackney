import React from "react"
import { Link } from "gatsby"

import MailingList from "./mailingList"
import LocationMap from "./locationMap"
import ContactDetails from "./contactDetails"

import {
  Footer,
  FooterSection,
  LinkList,
  FooterHeading,
  LinkItem,
} from "./footer.styles"
import { H2 } from "../shared/typography"

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
      <Section title="Links" maxWidth="8rem">
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
      </Section>
      <Section title="Mailing List" maxWidth="300px">
        <MailingList />
      </Section>
      <Section title="Contact" maxWidth="300px">
        <ContactDetails />
      </Section>
      <Section title="Map">
        <LocationMap />
      </Section>
    </Footer>
  )
}
