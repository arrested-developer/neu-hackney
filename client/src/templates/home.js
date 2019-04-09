import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ pageContext: { newsletters, campaigns, team, events } }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Home</h1>
      <section>
        <h2>Events</h2>
        {events.edges.map(({ node: { content } }) => (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        ))}
      </section>
      <section>
        <h2>Our Team</h2>
        {team.edges.map(({ node: { title } }) => (
          <li>{title}</li>
        ))}
      </section>
      <section>
        <h2>Campaigns</h2>
        {campaigns.edges.map(({ node: { title, content } }) => (
          <div>
            <h3>{title}</h3>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        ))}
      </section>
      <section>
        <h2>Newsletters</h2>
        {newsletters.edges.map(({ node: { date, content } }) => (
          <div>
            <h3>{date}</h3>
          </div>
        ))}
      </section>
    </Layout>
  )
}
