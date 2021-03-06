import React from "react"

import Event from "../event"

import { EventsList, EventsListItem } from "./listEvents.styles"

export default ({ events, ...props }) => {
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
  const futureEvents = getFutureEvents(sortByDateAscending(events))
  return (
    <EventsList {...props}>
      {futureEvents.length > 0
        ? futureEvents.map(event => (
            <EventsListItem key={event.node.id}>
              <Event event={event} />
            </EventsListItem>
          ))
        : "No events found"}
    </EventsList>
  )
}
