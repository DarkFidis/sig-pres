const neo4j = require('neo4j-driver');

class Neo4JClient {
  constructor(config) {
    const { NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD } = process.env
    this.driver = neo4j.driver(NEO4J_URI, neo4j.auth.basic(NEO4J_USER, NEO4J_PASSWORD))
    this.session = this.driver.session()
  }

  async stop() {
    try {
      if (!this.driver) {
        console.warn('No Neo4j connection found !')
        return
      }
      await this.session.close()
      await this.driver.close()
      console.log('Neo4j client stopped')
    } catch(err) {
      console.log('ERR : ', err)
    }
  }
}

// module.exports = neo4jClient

module.exports = Neo4JClient
