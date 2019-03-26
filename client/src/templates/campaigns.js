import React from "react"

export default ({ pageContext: { campaigns } }) => {
  return (
    <ul>
      {campaigns.map(({ title }) => (
        <li>{title.rendered}</li>
      ))}
    </ul>
  )
}
