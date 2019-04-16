import React, { useState, useEffect } from "react"
import { H3 } from "../shared/typography"

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
  const {
    node: { title },
  } = getNextEvent(meetings)
  return (
    <article {...props}>
      <H3>{title}</H3>
    </article>
  )
}
