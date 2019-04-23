import React from "react"

export default ({
  pageContext: { memberType, usefulResources, representedBy },
}) => {
  return (
    <>
      <h1>{memberType.name}</h1>
      <p>{memberType.description}</p>
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
        {usefulResources.length ? (
          usefulResources.map(resource => <li>{resource.node.title}</li>)
        ) : (
          <li>No resources found for this member type.</li>
        )}
      </ul>
    </>
  )
}
