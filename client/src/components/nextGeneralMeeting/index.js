import React from "react"

import Event from "../event"

export default ({ events, ...props }) => {
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

  return <Event event={getNextMeeting(meetings) || meetings[0]} {...props} />
}
