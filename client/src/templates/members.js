import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Main } from "./home.styles"
import { H1, P } from "../components/shared/text"
import TeamCard from "../components/team/teamCard"
import PageSection from "../components/pageSection"
import { ExternalLink } from "../components/shared/linksAndButtons"
import { Card } from "../components/shared/containers"

export default ({
  pageContext: { memberType, usefulResources, representedBy, newsletters },
}) => {
  return (
    <>
      <Layout>
        <SEO title={`Members - ${memberType.name}`} />
        <H1>{memberType.name}</H1>
        <Main>
          <PageSection
            title="About"
            titleBackground="light_green"
            titleColor="black"
          >
            <P>{memberType.description}</P>
          </PageSection>
          <PageSection
            title={
              representedBy.length > 1
                ? "Your representatives"
                : "Your representative"
            }
            titleBackground="purple"
            titleColor="white"
          >
            <ul>
              {representedBy.map(teamMember => (
                <TeamCard key={teamMember.node.id} teamMember={teamMember} />
              ))}
            </ul>
          </PageSection>
          <PageSection
            title="Useful resources"
            titleBackground="blue"
            titleColor="white"
          >
            <ul>
              {usefulResources.length ? (
                usefulResources.map(
                  ({
                    node: {
                      id,
                      title,
                      meta: {
                        neuhack_resource_is_external,
                        neuhack_resource_url,
                        neuhack_resource_file,
                      },
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
