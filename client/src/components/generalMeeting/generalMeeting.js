import React from "react"
import { P, H3 } from "../shared/typography"
import { ImgShadow } from "./generalMeeting.styles"
import { ExternalLink } from "../shared/links"

export const GeneralMeeting = ({ meeting, ...props }) => {
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
      <H3 visuallyHidden>{title}</H3>
      <P>{getReadableDateTime(neuhack_date_time)}</P>
      <P dangerouslySetInnerHTML={{ __html: neuhack_details }} />
      <ExternalLink href={publicURL}>
        View / download agenda and minutes
      </ExternalLink>
    </article>
  )
}

export const NextGeneralMeeting = ({ events, ...props }) => {
  const meetings = events.edges.filter(
    event => event.node.meta.neuhack_event_is_general_meeting
  )
  const sortByDateAscending = meetings => {
    const unsorted = meetings.slice()
    return unsorted.sort(
      (a, b) =>
        new Date(a.node.meta.neuhack_date_time) -
        new Date(b.node.meta.neuhack_date_time)
    )
  }

  const getFutureMeetings = meetings =>
    meetings.filter(
      event => new Date(event.node.meta.neuhack_date_time) > new Date()
    )

  const getNextMeeting = events =>
    getFutureMeetings(sortByDateAscending(events))[0]

  return <GeneralMeeting meeting={getNextMeeting(meetings)} {...props} />
}
