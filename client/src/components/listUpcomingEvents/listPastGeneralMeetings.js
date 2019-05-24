import React from "react"

import Event from "../event"

import { EventsList, EventsListItem } from "./listEvents.styles"

export default ({ events, ...props }) => {
  const sortByDateDescending = events => {
    const unsorted = events.slice()
    return unsorted.sort(
      (a, b) =>
        new Date(b.node.meta.neuhack_date_time) -
        new Date(a.node.meta.neuhack_date_time)
    )
  }

  const getPastEvents = events =>
    events.filter(
      event => new Date(event.node.meta.neuhack_date_time) < new Date()
    )
  const pastEvents = getPastEvents(sortByDateDescending(events))
  let pastGeneralMeetings = pastEvents.filter(
    event => event.node.meta.neuhack_event_is_general_meeting
  )
  const limit = 12
  if (pastGeneralMeetings.length > limit) {
    pastGeneralMeetings = pastGeneralMeetings.slice(0, limit)
  }
  return (
    <EventsList {...props}>
      {pastGeneralMeetings.map(event => (
        <EventsListItem key={event.node.id}>
          <Event event={event} />
        </EventsListItem>
      ))}
    </EventsList>
  )
}
