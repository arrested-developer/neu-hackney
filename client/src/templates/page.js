import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Main } from "./home.styles"
import { H1, P } from "../components/shared/text"
import TeamCard from "../components/team/teamCard"
import PageSection from "../components/pageSection"
import { ExternalLink } from "../components/shared/linksAndButtons"
import { Card } from "../components/shared/containers"
import WordpressPageContent from "../components/wordpressPageContent"

export default ({ pageContext: { page } }) => {
  return (
    <>
      <Layout>
        <SEO title={`Members - ${page.name}`} />
        <H1>{page.name}</H1>
        <Main>
          <PageSection
            title="About"
            titleBackground="light_green"
            titleColor="black"
          >
            {page.pageContent && page.pageContent.length ? (
              <WordpressPageContent>
                {page.pageContent[0].content}
              </WordpressPageContent>
            ) : (
              <P>{page.description}</P>
            )}
          </PageSection>
          {page.team && page.team.length > 0 && (
            <PageSection
              title={page.team.length > 1 ? "Contacts" : "Contact"}
              titleBackground="purple"
              titleColor="white"
            >
              <ul>
                {page.team.map(teamMember => (
                  <TeamCard key={teamMember.id} teamMember={teamMember} />
                ))}
              </ul>
            </PageSection>
          )}
          <PageSection
            title="Links and resources"
            titleBackground="blue"
            titleColor="white"
          >
            <ul>
              {page.resources.length ? (
                page.resources.map(
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
                )
              ) : (
                <li>No resources found for this member type.</li>
              )}
            </ul>
          </PageSection>
        </Main>
      </Layout>
    </>
  )
}
