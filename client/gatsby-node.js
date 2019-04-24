// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

const path = require(`path`)
//const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
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
              neuhack_resource_url {
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
    allWordpressWpNewsletters,
    allWordpressWpPosition,
    allWordpressWpUsefulResources,
    allWordpressCategory,
  } = result.data

  // create home page with graphQL data from meetings, campaigns and officers
  createPage({
    path: `/`,
    component: path.resolve("./src/templates/home.js"),
    context: {
      events: allWordpressWpEvents,
      campaigns: allWordpressWpCampaigns,
      team: allWordpressWpTeam,
      newsletters: allWordpressWpNewsletters,
      positions: allWordpressWpPosition,
    },
  })

  const getPostsInCategory = (posts, id) => {
    const postsWithCategory = posts.edges.filter(
      edge => edge.node.categories !== null
    )
    // filter down to posts which include the given WP category ID
    if (postsWithCategory && postsWithCategory.length) {
      const postsInCategory = postsWithCategory.filter(edge =>
        edge.node.categories.map(cat => cat.wordpress_id).includes(id)
      )
      return postsInCategory
    } else {
      return []
    }
  }

  // create pages for each category
  allWordpressCategory.edges.map(({ node }) => {
    createPage({
      path: `/members/${node.slug}`,
      component: path.resolve("./src/templates/members.js"),
      context: {
        memberType: node,
        usefulResources: getPostsInCategory(
          allWordpressWpUsefulResources,
          node.wordpress_id
        ),
        representedBy: getPostsInCategory(
          allWordpressWpTeam,
          node.wordpress_id
        ),
      },
    })
  })

  // createPage({
  //   path: `/generalmeetings/`,
  //   component: path.resolve("./src/templates/generalMeetings.js"),
  //   context: {
  //     generalMeetings: allWordpressWpGeneralmeeting,
  //   },
  // })

  // const postTemplate = path.resolve(`./src/templates/post.js`)
  // // We want to create a detailed page for each
  // // post node. We'll just use the WordPress Slug for the slug.
  // // The Post ID is prefixed with 'POST_'
  // allWordpressPost.edges.forEach(edge => {
  //   createPage({
  //     path: `/${edge.node.slug}/`,
  //     component: slash(postTemplate),
  //     context: {
  //       id: edge.node.id,
  //     },
  //   })
  // })
}
