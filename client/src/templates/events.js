import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Main } from "../components/shared/containers"
import { H1 } from "../components/shared/text"
import PageSection from "../components/pageSection"
import ListEvents from "../components/listUpcomingEvents"

export default ({ pageContext: { events } }) => {
  return (
    <>
      <Layout>
        <SEO title={`Events`} />
        <H1>Events</H1>
        <Main>
          <PageSection
            title="Upcoming Events"
            titleColor="white"
            titleBackground="dark_blue"
          >
            <ListEvents events={events.edges} />
          </PageSection>
        </Main>
      </Layout>
    </>
  )
}
