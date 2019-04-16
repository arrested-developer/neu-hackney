import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomePageSection, Content } from "./home.styles"
import { H1, H2 } from "../components/shared/typography"
import { NextGeneralMeeting } from "../components/generalMeeting/generalMeeting"

export default ({ pageContext: { newsletters, campaigns, team, events } }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <H1>Home</H1>
      <HomePageSection>
        <H2 background="light_green">Next General Meeting</H2>
        <Content>
          <NextGeneralMeeting events={events} />
        </Content>
      </HomePageSection>
      {/* <section>
        <h2>Events</h2>
        {events.edges.map(event => {
          return (
            <Img
              key={event.node.id}
              fluid={
                event.node.meta.neuhack_image_url.localFile.childImageSharp
                  .fluid
              }
            />
          )
        })}
      </section> */}
      {/* <section>
        <h2>Our Team</h2>
        {team.edges.map(({ node: { title } }) => (
          <li>{title}</li>
        ))}
      </section> */}
      {/* <section>
        <h2>Campaigns</h2>
        {campaigns.edges.map(({ node: { title, content } }) => (
          <div>
            <h3>{title}</h3>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        ))}
      </section> */}
      {/* <section>
        <h2>Newsletters</h2>
        {newsletters.edges.map(({ node: { date, content } }) => (
          <div>
            <h3>{date}</h3>
          </div>
        ))}
      </section> */}
    </Layout>
  )
}
