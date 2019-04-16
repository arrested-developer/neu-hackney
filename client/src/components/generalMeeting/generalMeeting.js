import React from "react"
import { H3, P } from "../shared/typography"
import Img from "gatsby-image"

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
      },
    },
  } = meeting
  return (
    <article {...props}>
      {/* <H3 visuallyHidden>{title}</H3> */}
      <Img
        fluid={childImageSharp.fluid}
        alt={neuhack_image_alt}
        style={{ boxShadow: "5px 5px 20px black" }}
      />
      <P style={{ marginTop: "1em" }}>
        {getReadableDateTime(neuhack_date_time)}
      </P>
      <P dangerouslySetInnerHTML={{ __html: neuhack_details }} />
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
