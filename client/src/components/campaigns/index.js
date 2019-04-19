import React from "react"
import { CarouselContainer } from "./campaigns.styles"
import Carousel from "../carousel"
import CampaignCard from "./campaignCard"

export default ({ campaigns, ...props }) => {
  return (
    <CarouselContainer>
      <Carousel>
        {campaigns.edges.map(campaign => (
          <CampaignCard campaign={campaign} key={campaign.node.id} />
        ))}
      </Carousel>
    </CarouselContainer>
  )
}
