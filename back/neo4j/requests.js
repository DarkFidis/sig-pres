const {neo4jClient} = require('../services')
const session = neo4jClient.session

const getLocations = async () => {
  if(!session) {
    return 'No session !'
  }
  try {
    const result = await session.run(`
      MATCH (l:Location)
      RETURN l.name, l.coordinates
    `)
    return result.records.map(item => {
      return {
        name: item.get('l.name'),
        coordinates: JSON.parse(item.get('l.coordinates'))
      }
    })
  } catch (err) {
    return err.message
  }
}

const getShortestPath = async mode => {
  if(!session) {
    return 'No session !'
  }
  try {
    const output = await session.run(`
      MATCH (n1:PointOfInterest{name: 'Le Moderne'})
      MATCH (n2:PointOfInterest{name: 'Mairie'})
      CALL gds.beta.shortestPath.dijkstra.stream('${mode}', {
          sourceNode: id(n1),
          targetNode: id(n2),
          relationshipWeightProperty: '${mode}'
      })
      YIELD index, sourceNode, targetNode, totalCost, nodeIds
      RETURN
          [nodeId IN nodeIds | gds.util.asNode(nodeId).coordinates] AS shortestPath
      ORDER BY index
    `, { mode })
    const result = output.records[0].get('shortestPath')
    return result
  } catch (err) {
    throw err
  }
}

module.exports = {
  getLocations,
  getShortestPath
}
