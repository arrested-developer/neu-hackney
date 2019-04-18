import React from "react"
import Img from "gatsby-image"
import { H3, P } from "../shared/typography"

const Campaign = ({ campaign, ...props }) => {
  const {
    node: {
      title,
      meta: {
        neuhack_details,
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
    <li {...props}>
      <H3>{title}</H3>
      <Img fluid={fluid} alt={neuhack_image_alt} />
      <P dangerouslySetInnerHtml={{ __html: neuhack_details }} />
    </li>
  )
}

export default ({ campaigns, ...props }) => {
  return (
    <ul {...props}>
      {campaigns.edges.map(campaign => (
        <Campaign campaign={campaign} key={campaign.node.id} />
      ))}
    </ul>
  )
}
