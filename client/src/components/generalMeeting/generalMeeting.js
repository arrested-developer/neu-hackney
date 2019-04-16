import React, { useState, useEffect } from "react"
import { H3 } from "../shared/typography"
import Img from "gatsby-image"

export default ({ meetings, ...props }) => {
  const sortByDateAscending = events => {
    const unsorted = events.slice()
    return unsorted.sort(
      (a, b) =>
        new Date(a.node.meta.neuhack_date_time) -
        new Date(b.node.meta.neuhack_date_time)
    )
  }

  const getFutureEvents = events =>
    events.filter(
      event => new Date(event.node.meta.neuhack_date_time) > new Date()
    )

  const getNextEvent = events => getFutureEvents(sortByDateAscending(events))[0]

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
  } = getNextEvent(meetings)

  return (
    <article {...props}>
      <H3>{title}</H3>
      <Img fluid={childImageSharp.fluid} alt={neuhack_image_alt} />
      <div>{getReadableDateTime(neuhack_date_time)}</div>
      <div dangerouslySetInnerHTML={{ __html: neuhack_details }} />
    </article>
  )
}
