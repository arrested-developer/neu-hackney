import React from "react"
import { H3, P } from "../shared/typography"
import { CampaignCard, CarouselContainer } from "./campaignCarousel.styles.js"
import Carousel from "../slickCarousel/slickCarousel"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Campaign = ({ campaign, ...props }) => {
  const {
    node: {
      id,
      title,
      meta: {
        neuhack_headline,
        neuhack_image_alt,
        neuhack_image_url: {
          localFile: {
            childImageSharp: { fluid },
          },
        },
      },
    },
  } = campaign
  return (
    <CampaignCard {...props}>
      <H3 color="white">{title}</H3>
      <P bold color="white">
        {neuhack_headline}
      </P>
      <Img fluid={fluid} alt={neuhack_image_alt} />
      <Link
        to={`/campaigns/${id}`}
        style={{
          display: "block",
          margin: "0.5rem 0",
          width: "100%",
          textAlign: "right",
        }}
      >
        Read more
      </Link>
    </CampaignCard>
  )
}

export default ({ campaigns, ...props }) => {
  return (
    <CarouselContainer>
      <Carousel>
        {campaigns.edges.map(campaign => (
          <Campaign campaign={campaign} key={campaign.node.id} />
        ))}
      </Carousel>
    </CarouselContainer>
  )
}