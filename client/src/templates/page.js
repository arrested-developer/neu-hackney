import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Main } from "../components/shared/containers"
import { H1, P } from "../components/shared/text"
import Team from "../components/team"
import PageSection from "../components/pageSection"
import WordpressPageContent from "../components/wordpressPageContent"
import UsefulResources from "../components/usefulResources"

export default ({
  pageContext: {
    page: { name, pageContent, description, team, resources },
  },
}) => {
  const pageHas = data => data && data.length > 0
  return (
    <>
      <Layout>
        <SEO title={`Members - ${name}`} />
        <H1>{name}</H1>
        <Main>
          {(pageHas(description) || pageHas(pageContent)) && (
            <PageSection
              title="About"
              titleBackground="light_green"
              titleColor="black"
            >
              {pageHas(pageContent) ? (
                <WordpressPageContent>
                  {pageContent[0].content}
                </WordpressPageContent>
              ) : (
                <P>{description}</P>
              )}
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
