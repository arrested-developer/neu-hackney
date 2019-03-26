import React from "react"

export default ({ pageContext: { officers } }) => {
  return (
    <ul>
      {officers.map(({ title }) => (
        <li>{title.rendered}</li>
      ))}
    </ul>
  )
}
