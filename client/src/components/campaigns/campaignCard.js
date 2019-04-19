import React from "react"

import Img from "gatsby-image"
import { Link } from "gatsby"
import { H3, P } from "../shared/text"
import { Card } from "../shared/containers"

export default ({ campaign, ...props }) => {
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
    <Card {...props}>
      <H3 color="white">{title}</H3>
      <P bold color="white">
        {neuhack_headline}
      </P>
      <Img fluid={{ ...fluid, aspectRatio: 16 / 9 }} alt={neuhack_image_alt} />
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
    </Card>
  )
}
