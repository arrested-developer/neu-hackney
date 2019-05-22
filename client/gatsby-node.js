// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allWordpressWpEvents {
        edges {
          node {
            id
            content
            title
            meta {
              neuhack_image_alt
              neuhack_date_time
              neuhack_details
              neuhack_event_is_general_meeting
              neuhack_attachment_url {
                localFile {
                  publicURL
                }
              }
              neuhack_image_url {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      base64
                      tracedSVG
                      aspectRatio
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                      sizes
                      originalImg
                      originalName
                    }
                  }
                }
              }
            }
          }
        }
      }
      allWordpressWpCampaigns {
        edges {
          node {
            id
            title
            content
            meta {
              neuhack_details
              neuhack_headline
              neuhack_image_url {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      base64
                      tracedSVG
                      aspectRatio
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                      sizes
                      originalImg
                      originalName
                    }
                  }
                }
              }
            }
          }
        }
      }
      allWordpressWpTeam {
        edges {
          node {
            id
            title
            content
            positions {
              wordpress_id
              name
            }
            meta {
              neuhack_team_member_email
              neuhack_team_member_position
              neuhack_image_url {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      base64
                      tracedSVG
                      aspectRatio
                      src
                      srcSet
                      srcWebp
                      srcSetWebp
                      sizes
                      originalImg
                      originalName
                    }
                  }
                }
              }
            }
          }
        }
      }
      allWordpressWpPosition {
        edges {
          node {
            id
            name
            slug
            wordpress_id
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            id
            title
            content
            slug
            resources {
              id
              title
              meta {
                neuhack_details
                neuhack_resource_is_external
                neuhack_resource_url
                neuhack_resource_file {
                  localFile {
                    publicURL
                  }
                }
              }
            }
            team {
              id
              title
              content
              positions {
                wordpress_id
                name
              }
              meta {
                neuhack_team_member_email
                neuhack_team_member_position
                neuhack_image_url {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 500) {
                        base64
                        tracedSVG
                        aspectRatio
                        src
                        srcSet
                        srcWebp
                        srcSetWebp
                        sizes
                        originalImg
                        originalName
                      }
                    }
                  }
                }
              }
            }
            categories {
              id
              name
            }
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const {
    allWordpressWpCampaigns,
    allWordpressWpEvents,
    allWordpressWpTeam,
    allWordpressPage,
  } = result.data

  // create home page with graphQL data from meetings, campaigns and officers
  createPage({
    path: `/`,
    component: path.resolve("./src/templates/home.js"),
    context: {
      events: allWordpressWpEvents,
      campaigns: allWordpressWpCampaigns,
      team: allWordpressWpTeam,
    },
  })

  // generate events page to list all events
  createPage({
    path: `/events`,
    component: path.resolve("./src/templates/events.js"),
    context: {
      events: allWordpressWpEvents,
    },
  })

  // generate pages

  const makePagePath = page => {
    const hasCategory = (page, name) => {
      return (
        page.node.categories &&
        page.node.categories.filter(category => category.name === name).length
      )
    }
    if (hasCategory(page, "Members Page")) {
      return `/members/${page.node.slug}`
    } else {
      return `/${page.node.slug}`
    }
  }

  allWordpressPage.edges.map(page => {
    createPage({
      path: makePagePath(page),
      component: path.resolve("./src/templates/page.js"),
      context: {
        page: page.node,
      },
    })
  })
}
