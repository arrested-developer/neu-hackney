import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Main } from "../components/shared/containers"
import { H1 } from "../components/shared/text"
import PageSection from "../components/pageSection"
import ListCampaigns from "../components/campaigns/listCampaigns"

export default ({ pageContext: { campaigns, settings } }) => {
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
        </Main>
      </Layout>
    </>
  )
}
