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

const mapResourcesToCategories = entities => {
  const resources = entities.filter(
    e => e.__type === "wordpress__wp_useful_resources"
  )

  return entities.map(e => {
    if (e.__type === `wordpress__CATEGORY`) {
      e.resources___NODE = resources
        .filter(r => r.categories___NODE.includes(e.id))
        .map(r => r.id)
    }
    return e
  })
}

module.exports = ({ entities }) => {
  entities = mapPositionsToTeam(entities)
  entities = mapResourcesToCategories(entities)
  return entities
}
