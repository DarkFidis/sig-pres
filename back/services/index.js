const Neo4JClient = require('./neo4j-client')
const mongoClient = require('./mongo')
const { NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD } = require('../config')

const neo4jClient = new Neo4JClient({ NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD })
console.log()

module.exports = {
  mongoClient,
  neo4jClient
}
