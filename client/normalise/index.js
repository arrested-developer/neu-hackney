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

module.exports = ({ entities }) => {
  entities = mapPositionsToTeam(entities)
  // entities = mapResourcesToCategories(entities)
  // entities = mapTeamToCategories(entities)
  // entities = mapPagesToCategories(entities)
  return entities
}
