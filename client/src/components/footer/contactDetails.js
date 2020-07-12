import React from "react"
import { P } from "../shared/text"
import { ExternalLink } from "../shared/linksAndButtons"

const ContactDetails = ({ address, phone, email, ...props }) => {
  const emails = email.split(",").map(email => email.trim())
  return (
    <div {...props}>
      {emails.map(email => (
        <ExternalLink href={`mailto:${email}`}>{email}</ExternalLink>
      ))}
      <P>
        <ExternalLink href={`tel:${phone}`}>{phone}</ExternalLink>
      </P>
      <P dangerouslySetInnerHTML={{ __html: address }} />
    </div>
  )
}

export default ContactDetails
