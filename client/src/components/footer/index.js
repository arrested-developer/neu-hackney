import React from "react"
import uuidv4 from "uuid/v4"

import MailingList from "./mailingList"
import LocationMap from "./locationMap"
import ContactDetails from "./contactDetails"

import { Footer, FooterSection, FooterSocials } from "./footer.styles"
import { LinkList, LinkItem, Link } from "../shared/linksAndButtons"
import { H2 } from "../shared/text"
import { Facebook, Twitter } from "../shared/social"

const Section = ({ title, children, ...props }) => (
  <FooterSection {...props}>
    <H2 background="cyan">{title}</H2>
    {children}
  </FooterSection>
)

export default ({ navLinks, ...props }) => {
  return (
    <Footer {...props}>
      <Section title="Links" maxWidth="14rem">
        <LinkList>
          {navLinks.map(link => {
            if (Array.isArray(link.to)) {
              return (
                <div key={uuidv4()}>
                  {link.name}
                  <LinkList indent>
                    {link.to.map(innerLink => (
                      <LinkItem key={uuidv4()}>
                        <Link to={innerLink.to}>{innerLink.name}</Link>
                      </LinkItem>
                    ))}
                  </LinkList>
                </div>
              )
            } else {
              return (
                <LinkItem key={uuidv4()}>
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
      <FooterSocials>
        <Twitter
          href="https://twitter.com"
          title="Twitter"
          style={{ marginRight: "1rem" }}
        />
        <Facebook href="https://facebook.com" title="Facebook" />
      </FooterSocials>
    </Footer>
  )
}
