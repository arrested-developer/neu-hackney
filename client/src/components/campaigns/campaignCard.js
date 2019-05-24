import React from "react"

import Img from "gatsby-image"
import { Link } from "gatsby"
import { H3, P } from "../shared/text"
import { Card } from "../shared/containers"
import { Details } from "./campaigns.styles"
import RichText from "../wordpressPageContent"

export default ({ campaign, showDetails, ...props }) => {
  const {
    node: {
      title,
      content,
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
    <Card {...props}>
      <H3 color="blue">{title}</H3>
      <P bold color="black">
        {neuhack_headline}
      </P>
      <Img fluid={{ ...fluid, aspectRatio: 16 / 9 }} alt={neuhack_image_alt} />
      {showDetails ? (
        <Details>
          <RichText dark>{content}</RichText>
        </Details>
      ) : (
        <Link
          to={`/campaigns`}
          style={{
            display: "block",
            margin: "0.5rem 0",
            width: "100%",
            textAlign: "right",
          }}
        >
          Read more
        </Link>
      )}
    </Card>
  )
}
