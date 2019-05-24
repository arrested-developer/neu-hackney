import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Main } from "../components/shared/containers"
import { H1 } from "../components/shared/text"
import Team from "../components/team"
import PageSection from "../components/pageSection"
import WordpressPageContent from "../components/wordpressPageContent"
import UsefulResources from "../components/usefulResources"

export default ({
  pageContext: {
    page: { title, content, team, resources },
  },
}) => {
  const pageHas = data => data && data.length > 0
  return (
    <>
      <Layout>
        <SEO title={`Members - ${title}`} />
        <H1>{title}</H1>
        <Main>
          {pageHas(content) && (
            <PageSection
              title="About"
              titleBackground="light_green"
              titleColor="black"
            >
              <WordpressPageContent>{content}</WordpressPageContent>
            </PageSection>
          )}
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
