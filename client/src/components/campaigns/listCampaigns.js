import React from "react"

import CampaignCard from "./campaignCard"

import { CampaignList, CampaignListItem } from "./campaigns.styles"

export default ({ campaigns, ...props }) => {
  return (
    <CampaignList {...props}>
      {campaigns.map(campaign => (
        <CampaignListItem key={campaign.node.id}>
          <CampaignCard campaign={campaign} showDetails />
        </CampaignListItem>
      ))}
    </CampaignList>
  )
}
