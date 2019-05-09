import React from "react"
import { CarouselContainer } from "./campaigns.styles"
import Carousel from "../carousel"
import CampaignCard from "./campaignCard"

export default ({ campaigns, ...props }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <CarouselContainer>
      <Carousel settings={settings}>
        {campaigns.edges.map(campaign => (
          <CampaignCard campaign={campaign} key={campaign.node.id} />
        ))}
      </Carousel>
    </CarouselContainer>
  )
}
