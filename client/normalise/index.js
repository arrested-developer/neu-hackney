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

const logTaxonomies = entities => {
  entities.forEach(e => console.log(e.__type))
}

const mapResourcesToCategories = entities => {
  const resources = entities.filter(
    e => e.__type === "wordpress__wp_useful_resources"
  )

  return entities.map(e => {
    if (e.__type === `wordpress__CATEGORY`) {
      e.resources___NODE = resources
        .filter(
          r =>
            r.categories___NODE &&
            r.categories___NODE.length &&
            r.categories___NODE.includes(e.id)
        )
        .map(r => r.id)
    }
    return e
  })
}

const mapTeamToCategories = entities => {
  const team = entities.filter(e => e.__type === "wordpress__wp_team")

  return entities.map(e => {
    if (e.__type === `wordpress__CATEGORY`) {
      e.team___NODE = team
        .filter(
          t =>
            t.categories___NODE &&
            t.categories___NODE.length &&
            t.categories___NODE.includes(e.id)
        )
        .map(t => t.id)
    }
    return e
  })
}

const mapPagesToCategories = entities => {
  const pages = entities.filter(e => e.__type === "wordpress__PAGE")

  return entities.map(e => {
    if (e.__type === `wordpress__CATEGORY`) {
      e.pageContent___NODE = pages
        .filter(
          p =>
            p.categories___NODE &&
            p.categories___NODE.length &&
            p.categories___NODE.includes(e.id)
        )
        .map(t => t.id)
    }
    return e
  })
}

module.exports = ({ entities }) => {
  entities = mapPositionsToTeam(entities)
  logTaxonomies(entities)
  // entities = mapResourcesToCategories(entities)
  // entities = mapTeamToCategories(entities)
  // entities = mapPagesToCategories(entities)
  return entities
}
