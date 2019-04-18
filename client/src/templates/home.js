import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomePageSection, Content } from "./home.styles"
import { H1, H2 } from "../components/shared/typography"
import { NextGeneralMeeting } from "../components/generalMeeting/generalMeeting"
import CampaignCarousel from "../components/campaignCarousel/campaignCarousel"
import TwitterFeed from "../components/twitterEmbed/twitterEmbed"

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

export default ({ pageContext: { newsletters, campaigns, team, events } }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <H1 color="white">Home</H1>
      <Section title="Next General Meeting" titleBackground="light_green">
        <NextGeneralMeeting events={events} />
      </Section>
      <Section title="Our Campaigns" titleBackground="pink" titleColor="white">
        <CampaignCarousel campaigns={campaigns} />
      </Section>
      <Section
        title="Latest News"
        titleBackground="light_green"
        titleColor="black"
      >
        <TwitterFeed tweetLimit="5" width="280" height="auto" />
      </Section>
    </Layout>
  )
}
