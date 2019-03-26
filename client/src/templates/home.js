import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext: { generalMeetings, officers, campaigns } }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Home</h1>
      <ul>
        <h2>General Meetings</h2>
        {generalMeetings.edges.map(({ node: { title } }) => (
          <li>{title}</li>
        ))}
      </ul>
      <ul>
        <h2>Officers</h2>
        {officers.edges.map(({ node: { title } }) => (
          <li>{title}</li>
        ))}
      </ul>
      <ul>
        <h2>Campaigns</h2>
        {campaigns.edges.map(({ node: { title } }) => (
          <li>{title}</li>
        ))}
      </ul>
    </Layout>
  )
}
