import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Main } from "./home.styles"
import { H1, P } from "../components/shared/text"
import Team from "../components/team"
import PageSection from "../components/pageSection"
import { ExternalLink } from "../components/shared/linksAndButtons"
import { Card } from "../components/shared/containers"
import WordpressPageContent from "../components/wordpressPageContent"

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
          {pageHas(team) && (
            <PageSection
              title={team.length > 1 ? "Contacts" : "Contact"}
              titleBackground="purple"
              titleColor="white"
            >
              <Team team={team} noInfo />
            </PageSection>
          )}
          <PageSection
            title="Links and resources"
            titleBackground="blue"
            titleColor="white"
          >
            <ul>
              {pageHas(resources) &&
                resources.map(
                  ({
                    id,
                    title,
                    meta: {
                      neuhack_resource_is_external,
                      neuhack_resource_url,
                      neuhack_resource_file,
                    },
                  }) => (
                    <li key={id}>
                      <Card>
                        <ExternalLink
                          color="dark_blue"
                          href={
                            neuhack_resource_is_external
                              ? neuhack_resource_url
                              : neuhack_resource_file.localFile.publicURL
                          }
                        >
                          {title}
                        </ExternalLink>
                      </Card>
                    </li>
                  )
                )}
            </ul>
          </PageSection>
        </Main>
      </Layout>
    </>
  )
}
