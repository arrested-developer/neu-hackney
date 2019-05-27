import React from "react"
import { P } from "../shared/text"
import { ExternalLink } from "../shared/linksAndButtons"

const ContactDetails = ({ address, phone, email, ...props }) => {
  return (
    <div {...props}>
      <ExternalLink href={`mailto:${email}`}>{email}</ExternalLink>
      <P>
        <ExternalLink href={`tel:${phone}`}>{phone}</ExternalLink>
      </P>
      <P dangerouslySetInnerHTML={{ __html: address }} />
    </div>
  )
}

export default ContactDetails
