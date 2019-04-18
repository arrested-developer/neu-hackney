import React from "react"
import { P } from "../shared/typography"

export default ({ newsletters, limit = 10, ...props }) => (
  <>
    <P color="white">
      View or download the NEU Hackney newsletter in pdf format
    </P>
    <ul>
      {newsletters.edges.slice(0, limit).map(newsletter => (
        <li key={newsletter.node.id}>
          <a
            href={
              newsletter.node.meta.neuhack_attachment_url.localFile.publicURL
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {newsletter.node.title}
          </a>
        </li>
      ))}
    </ul>
  </>
)
