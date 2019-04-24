import React from "react"
import { P } from "../shared/text"
import { Card } from "../shared/containers"

export default ({ newsletters, limit = 10, ...props }) => {
  return (
    <StaticQuery
      query={graphql`
    query newsletterQuery {
      newsletters: {
        allWordpressWpNewsletters {
          edges {
            node {
              id
              title
              date
              content
              meta {
                neuhack_attachment_url {
                  localFile {
                    publicURL
                  }
                }
              }
            }
          }
        }
      }
    }
  `}
      render={({ newsletters }) => (
        <>
          <P color="white">
            View or download the NEU Hackney newsletter in pdf format
          </P>
          <ul>
            {newsletters.edges.slice(0, limit).map(newsletter => (
              <li key={newsletter.node.id}>
                <Card>
                  <a
                    href={
                      newsletter.node.meta.neuhack_attachment_url.localFile
                        .publicURL
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {newsletter.node.title}
                  </a>
                </Card>
              </li>
            ))}
          </ul>
        </>
      )}
    />
  )
}
