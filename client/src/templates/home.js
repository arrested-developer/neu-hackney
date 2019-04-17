import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomePageSection, Content } from "./home.styles"
import { H1, H2 } from "../components/shared/typography"
import { NextGeneralMeeting } from "../components/generalMeeting/generalMeeting"
import CampaignCarousel from "../components/campaignCarousel/campaignCarousel"

const _HomePageSection = ({
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
      <H1>Home</H1>
      <_HomePageSection
        title="Next General Meeting"
        titleBackground="light_green"
      >
        <NextGeneralMeeting events={events} />
      </_HomePageSection>
      <_HomePageSection
        title="Our Campaigns"
        titleBackground="pink"
        titleColor="white"
      >
        <CampaignCarousel campaigns={campaigns} />
      </_HomePageSection>
    </Layout>
  )
}
