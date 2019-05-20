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
            categories {
              wordpress_id
            }
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
      allWordpressWpUsefulResources(
        filter: { categories: { elemMatch: { wordpress_id: { ne: null } } } }
      ) {
        edges {
          node {
            id
            title
            categories {
              wordpress_id
            }
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
        }
      }
      allWordpressCategory(filter: { name: { ne: "Uncategorised" } }) {
        edges {
          node {
            id
            wordpress_id
            name
            slug
            description
            count
            resources {
              id
              title
              categories {
                wordpress_id
              }
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
              categories {
                wordpress_id
              }
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
            pageContent {
              id
              content
            }
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            id
            title
            categories {
              wordpress_id
            }
            content
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
    allWordpressWpEvents,
    allWordpressWpCampaigns,
    allWordpressWpTeam,
    allWordpressCategory,
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

  // generate pages from categories. If the category has a page, it is standalone
  // if the category has no page, it belongs in the members dropdown

  const makeCategoryPath = node => {
    const isStandalonePage = node => node.pageContent && node.pageContent.length
    if (isStandalonePage(node)) return `/${node.slug}`
    else return `/members/${node.slug}`
  }

  allWordpressCategory.edges.map(({ node }) => {
    createPage({
      path: makeCategoryPath(node),
      component: path.resolve("./src/templates/page.js"),
      context: {
        page: node,
      },
    })
  })
}
