import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Main } from "./components/shared/containers"
import { H1 } from "../components/shared/text"
import NextGeneralMeeting from "../components/generalMeeting/nextGeneralMeeting"
import CampaignCarousel from "../components/campaigns"
import Team from "../components/team"
import PageSection from "../components/pageSection"

export default ({ pageContext: { campaigns, team, events, positions } }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <H1 color="white">Home</H1>
      <Main>
        <PageSection
          title="Next General Meeting"
          titleBackground="light_green"
          titleColor="black"
        >
          <NextGeneralMeeting events={events} />
        </PageSection>
        <PageSection
          title="Our Campaigns"
          titleBackground="pink"
          titleColor="white"
        >
          <CampaignCarousel campaigns={campaigns} />
        </PageSection>
        <PageSection
          title="Our Team"
          titleBackground="purple"
          titleColor="white"
        >
          <Team team={team} positions={positions} />
        </PageSection>
      </Main>
    </Layout>
  )
}
