import React from "react"
export default ({ pageContext: { generalMeetings } }) => {
  return (
    <ul>
      {generalMeetings.edges.map(({ node: { title } }) => (
        <li>{title}</li>
      ))}
    </ul>
  )
}
