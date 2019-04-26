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
            title="Calendar"
            titleColor="white"
            titleBackground="purple"
          >
            <iframe
              title="Google Calendar"
              width="100%"
              height="500px"
              src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=en.uk%23holiday%40group.v.calendar.google.com&amp;color=%23125A12&amp;ctz=Europe%2FLondon"
            />
          </PageSection>
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
