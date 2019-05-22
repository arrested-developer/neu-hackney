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
    page: { title, content, description, team, resources },
  },
}) => {
  console.log(content)
  const pageHas = data => data && data.length > 0
  return (
    <>
      <Layout>
        <SEO title={`Members - ${title}`} />
        <H1>{title}</H1>
        <Main>
          {(pageHas(description) || pageHas(content)) && (
            <PageSection
              title="About"
              titleBackground="light_green"
              titleColor="black"
            >
              {pageHas(content) ? (
                <WordpressPageContent>{content}</WordpressPageContent>
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
