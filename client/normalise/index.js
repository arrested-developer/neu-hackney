/**
 * Custom normalisation of Wordpress data to GraphQL
 */

const mapPositionsToTeam = entities => {
  const positions = entities.filter(e => e.__type === `wordpress__wp_position`)

  return entities.map(e => {
    if (e.__type === `wordpress__wp_team`) {
      let hasGenres =
        e.position && Array.isArray(e.position) && e.position.length
      // Replace positions with links to their nodes.
      if (hasGenres) {
        e.positions___NODE = e.position.map(
          c => positions.find(gObj => c === gObj.wordpress_id).id
        )
        delete e.position
      }
    }
    return e
  })
}

const mapResourcesToPages = entities => {
  const resources = entities.filter(
    e => e.__type === `wordpress__wp_useful_resources`
  )
  return entities.map(e => {
    if (e.__type === `wordpress__PAGE`) {
      let hasMemberPage =
        e.member_page && Array.isArray(e.member_page) && e.member_page.length
      // Add resources node
      if (hasMemberPage) {
        e.resources___NODE = resources
          .filter(r => r.member_page.includes(e.member_page[0]))
          .map(r => r.id)
      }
    }
    return e
  })
}

const mapTeamToPages = entities => {
  const team = entities.filter(e => e.__type === `wordpress__wp_team`)
  return entities.map(e => {
    if (e.__type === `wordpress__PAGE`) {
      let hasMemberPage =
        e.member_page && Array.isArray(e.member_page) && e.member_page.length
      // Add resources node
      if (hasMemberPage) {
        e.team___NODE = team
          .filter(t => t.member_page.includes(e.member_page[0]))
          .map(t => t.id)
      }
    }
    return e
  })
}

const checkImageNodes = entities => {
  const nodesWithError = entities.filter(
    e => e.meta && e.meta.neuhack_image_url && e.meta.neuhack_image_url.length
  )
  if (nodesWithError.length > 0) {
    nodesWithError.map(e => {
      console.log(
        "ERROR WITH IMAGE NODE: ",
        `title: ${e.title}\ntype: ${e.__type}\nurl: ${e.meta.neuhack_image_url}`
      )
    })
    throw new Error("One or more images could not be downloaded")
  } else {
    console.log("Image nodes checked")
  }
}

const checkAttachmentNodes = entities => {
  const nodesWithError = entities.filter(
    e =>
      e.meta &&
      e.meta.neuhack_attachment_url &&
      e.meta.neuhack_attachment_url.length
  )
  if (nodesWithError.length > 0) {
    nodesWithError.map(e => {
      console.log(
        "ERROR WITH FILE ATTACHMENT NODE: ",
        `title: ${e.title}\ntype: ${e.__type}\nurl: ${
          e.meta.neuhack_attachment_url
        }`
      )
    })
    throw new Error("One or more attachments could not be downloaded")
  } else {
    console.log("Attachment nodes checked")
  }
}

module.exports = ({ entities }) => {
  entities = mapPositionsToTeam(entities)
  entities = mapResourcesToPages(entities)
  entities = mapTeamToPages(entities)
  checkImageNodes(entities)
  checkAttachmentNodes(entities)
  return entities
}
