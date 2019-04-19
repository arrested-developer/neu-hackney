import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomePageSection, Content, Main, Aside } from "./home.styles"
import { H1, H2 } from "../components/shared/typography"
import { NextGeneralMeeting } from "../components/generalMeeting/generalMeeting"
import CampaignCarousel from "../components/campaignCarousel/campaignCarousel"
import TwitterFeed from "../components/twitterEmbed/twitterEmbed"
import Newsletters from "../components/newsletters/newsletters"
import Join from "../components/join/join"
import Team from "../components/team/team"

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
  pageContext: { newsletters, campaigns, team, events, positions },
}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <H1 color="white">Home</H1>
      <Main>
        <Section title="Next General Meeting" titleBackground="light_green">
          <NextGeneralMeeting events={events} />
        </Section>
        <Section
          title="Our Campaigns"
          titleBackground="pink"
          titleColor="white"
        >
          <CampaignCarousel campaigns={campaigns} />
        </Section>
        <Section title="Our Team" titleBackground="purple" titleColor="white">
          <Team team={team} positions={positions} />
        </Section>
      </Main>
      <Aside>
        <Section
          title="Latest News"
          titleBackground="light_green"
          titleColor="black"
        >
          <TwitterFeed tweetLimit="5" width="100%" height="auto" />
        </Section>
        <Section title="Newsletter" titleBackground="purple" titleColor="white">
          <Newsletters newsletters={newsletters} />
        </Section>
        <Section
          title="Join the NEU"
          titleBackground="green"
          titleColor="white"
        >
          <Join />
        </Section>
      </Aside>
    </Layout>
  )
}
