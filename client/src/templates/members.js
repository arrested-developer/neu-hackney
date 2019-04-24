import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { HomePageSection, Content, Main, Aside } from "./home.styles"
import { H1, H2, P } from "../components/shared/text"
import TeamCard from "../components/team/teamCard"

import TwitterFeed from "../components/twitter"
import Newsletters from "../components/newsletters"
import Join from "../components/join"

const Section = ({
  title,
  titleBackground,
  titleColor,
  children,
  ...props
}) => {
  return (
    <HomePageSection {...props}>
      <H2 background={titleBackground} color={titleColor}>
        {title}
      </H2>
      <Content>{children}</Content>
    </HomePageSection>
  )
}

export default ({
  pageContext: { memberType, usefulResources, representedBy, newsletters },
}) => {
  return (
    <>
      <Layout>
        <SEO title={`Members - ${memberType.name}`} />
        <H1>{memberType.name}</H1>
        <Main>
          <Section
            title="About"
            titleBackground="light_green"
            titleColor="black"
          >
            <P>{memberType.description}</P>
          </Section>
          <Section
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
          </Section>
          <Section
            title="Useful resources"
            titleBackground="blue"
            titleColor="white"
          >
            <ul>
              {usefulResources.length ? (
                usefulResources.map(resource => <li>{resource.node.title}</li>)
              ) : (
                <li>No resources found for this member type.</li>
              )}
            </ul>
          </Section>
        </Main>
        <Aside>
          <Section
            title="Latest News"
            titleBackground="purple"
            titleColor="white"
          >
            <TwitterFeed
              tweetLimit="5"
              width="100%"
              height="auto"
              timeline="https://twitter.com/hackneynut?ref_src=twsrc%5Etfw"
            />
          </Section>
          <Section title="Newsletter" titleBackground="pink" titleColor="white">
            <Newsletters newsletters={newsletters} />
          </Section>
          <Section
            title="Join the NEU"
            titleBackground="light_green"
            titleColor="black"
          >
            <Join />
          </Section>
        </Aside>
      </Layout>
    </>
  )
}
