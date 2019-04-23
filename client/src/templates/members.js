import React from "react"

export default ({
  pageContext: { memberType, usefulResources, representedBy },
}) => {
  return (
    <>
      <h1>{memberType.name}</h1>
      <h2>Represented by:</h2>
      <ul>
        {representedBy.map(teamMember => (
          <li>
            <h3>{teamMember.node.title}</h3>
          </li>
        ))}
      </ul>
      <h2>Useful Resources:</h2>
      <ul>
        {usefulResources.map(resource => (
          <li>
            <h3>{resource.node.title}</h3>
          </li>
        ))}
      </ul>
    </>
  )
}
