import React from "react"
import uuidv4 from "uuid/v4"
import { ExternalLink, ContactP } from "./footer.styles.js"

const emails = ["dave.davies@neu.org.uk", "sandra.hall@neu.org.uk"]
const phone = "0208 958 2056"
const address = "14-18 Florfield Road<br/>Reading Lane<br/>London<br/>E8 1DT"

const ContactDetails = props => {
  return (
    <div {...props}>
      {emails.map(email => (
        <ExternalLink key={uuidv4()} href={`mailto:${email}`}>
          {email}
        </ExternalLink>
      ))}
      <ContactP>
        <ExternalLink href={`tel:${phone}`}>{phone}</ExternalLink>
      </ContactP>
      <ContactP dangerouslySetInnerHTML={{ __html: address }} />
    </div>
  )
}

export default ContactDetails
