import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Main } from "../components/shared/containers"
import { H1 } from "../components/shared/text"
import PageSection from "../components/pageSection"
import ListCampaigns from "../components/campaigns/listCampaigns"
import Team from "../components/team"
import UsefulResources from "../components/usefulResources"

export default ({ pageContext: { campaigns, settings, team, resources } }) => {
  const pageHas = data => data && data.length > 0
  console.log(resources)
  return (
    <>
      <Layout settings={settings}>
        <SEO title={`Campaigns`} />
        <H1>Campaigns</H1>
        <Main>
          <PageSection
            title="Current campaigns"
            titleColor="white"
            titleBackground="dark_blue"
          >
            <ListCampaigns campaigns={campaigns.edges} />
          </PageSection>
          {pageHas(team) && (
            <PageSection
              title={team.length > 1 ? "Contacts" : "Contact"}
              titleBackground="purple"
              titleColor="white"
            >
              <Team team={team} noInfo />
            </PageSection>
          )}
          {pageHas(resources) && (
            <PageSection
              title="Links and resources"
              titleBackground="blue"
              titleColor="white"
            >
              <UsefulResources resources={resources} />
            </PageSection>
          )}
        </Main>
      </Layout>
    </>
  )
}
