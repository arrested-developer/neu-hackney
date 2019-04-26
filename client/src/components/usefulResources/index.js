import React from "react"

import { ExternalLink } from "../shared/linksAndButtons"
import { Card } from "../shared/containers"

export default ({ resources, ...props }) => (
  <ul {...props}>
    {resources.map(
      ({
        id,
        title,
        meta: {
          neuhack_resource_is_external,
          neuhack_resource_url,
          neuhack_resource_file,
        },
      }) => (
        <li key={id}>
          <Card>
            <ExternalLink
              color="dark_blue"
              href={
                neuhack_resource_is_external
                  ? neuhack_resource_url
                  : neuhack_resource_file.localFile.publicURL
              }
            >
              {title}
            </ExternalLink>
          </Card>
        </li>
      )
    )}
  </ul>
)
