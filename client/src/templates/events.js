import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Main } from "../components/shared/containers"
import { H1 } from "../components/shared/text"
import PageSection from "../components/pageSection"
import ListEvents from "../components/listUpcomingEvents"
import ListPastGeneralMeetings from "../components/listUpcomingEvents/listPastGeneralMeetings"

export default ({ pageContext: { events, settings } }) => {
  return (
    <>
      <Layout settings={settings}>
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
              src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=75s309ejsqomoli3je3k8rb654%40group.calendar.google.com&ctz=Europe%2FLondon"
            />
          </PageSection>
          <PageSection
            title="Upcoming Events"
            titleColor="white"
            titleBackground="dark_blue"
          >
            <ListEvents events={events.edges} />
          </PageSection>
          <PageSection
            title="Previous General Meeetings"
            titleColor="white"
            titleBackground="green"
          >
            <ListPastGeneralMeetings events={events.edges} />
          </PageSection>
        </Main>
      </Layout>
    </>
  )
}
