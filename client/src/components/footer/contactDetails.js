import React from "react"
import { ContactLink, ContactP } from "./footer.styles.js"

const emails = ["dave.davies@neu.org.uk", "sandra.hall@neu.org.uk"]
const phone = "0208 958 2056"
const address = "14-18 Florfield Road<br/>Reading Lane<br/>London<br/>E8 1DT"

const ContactDetails = props => {
  return (
    <div {...props}>
      {emails.map(email => (
        <ContactLink href={`mailto:${email}`}>{email}</ContactLink>
      ))}
      <ContactP>
        <ContactLink href={`tel:${phone}`}>{phone}</ContactLink>
      </ContactP>
      <ContactP dangerouslySetInnerHTML={{ __html: address }} />
    </div>
  )
}

export default ContactDetails
