const { getShortestPath, getLocations } = require('../neo4j/requests')

const getNeo4jDataMw = async (req, res, next) => {
  try {
    const data = await getLocations()
    res.json(data)
  } catch (err) {
    console.log('Neo4J request error : ', err)
    res.status(503).end(err.message)
  }
}

const getShortestPathByDistanceMw = async (req, res, next) => {
  const { mode } = req.body
  if (!mode || !['distance', 'time'].includes(mode)) {
    res.status(400).json({ err: 'Invalid mode' })
    return
  }
  try {
    const stringifiedPath = await getShortestPath(mode)
    const path = stringifiedPath.map(item => JSON.parse(item))
    res.json({ data: path })
  } catch (err) {
    console.log('Neo4J request error : ', err)
    res.status(503).end(err.message)
  }
}



module.exports = {
  getNeo4jDataMw,
  getShortestPathByDistanceMw
}
