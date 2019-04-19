import React from "react"
import { P, H3 } from "../shared/text"
import { ImgShadow } from "./generalMeeting.styles"
import { ExternalLink } from "../shared/linksAndButtons"

export default ({ meeting, ...props }) => {
  const getReadableDateTime = dateTime => {
    const d = new Date(dateTime)
    const date = d.toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    const time = d.toLocaleTimeString("en-GB", {
      hour12: true,
      hour: "numeric",
      minute: "2-digit",
    })
    return `${date} @ ${time}`
  }
  const {
    node: {
      title,
      meta: {
        neuhack_image_alt,
        neuhack_date_time,
        neuhack_details,
        neuhack_image_url: {
          localFile: { childImageSharp },
        },
        neuhack_attachment_url: {
          localFile: { publicURL },
        },
      },
    },
  } = meeting
  return (
    <article {...props}>
      <ImgShadow fluid={childImageSharp.fluid} alt={neuhack_image_alt} />
      <H3 color="white">{title}</H3>
      <P color="white">{getReadableDateTime(neuhack_date_time)}</P>
      <P color="white" dangerouslySetInnerHTML={{ __html: neuhack_details }} />
      <ExternalLink href={publicURL}>
        View / download agenda and minutes
      </ExternalLink>
    </article>
  )
}
