import React from "react"

// import MailingList from "./mailingList"
import LocationMap from "./locationMap"
import ContactDetails from "./contactDetails"
import FooterLinks from "./footerLinks"

import { Footer, FooterSection, FooterSocials } from "./footer.styles"
import { H2 } from "../shared/text"
import { Facebook, Twitter } from "../shared/social"

const Section = ({ title, children, ...props }) => (
  <FooterSection {...props}>
    <H2 background="cyan">{title}</H2>
    {children}
  </FooterSection>
)

export default ({ navLinks, settings, ...props }) => {
  const {
    node: {
      meta: { twitter, facebook, address, email, phone },
    },
  } = settings.edges[0]
  return (
    <Footer {...props}>
      <Section title="Links" maxWidth="14rem">
        <FooterLinks navLinks={navLinks} />
      </Section>
      {/* <Section title="Mailing List" maxWidth="300px">
        <MailingList />
      </Section> */}
      <Section title="Map">
        <LocationMap />
      </Section>
      <Section title="Contact">
        <ContactDetails address={address} email={email} phone={phone} />
      </Section>
      <FooterSocials>
        <Twitter
          href={twitter}
          title="Twitter"
          style={{ marginRight: "1rem" }}
        />
        <Facebook href={facebook} title="Facebook" />
      </FooterSocials>
    </Footer>
  )
}
