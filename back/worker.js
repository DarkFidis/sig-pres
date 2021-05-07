const process = require('process')

const server = require('./server')
const { mongoClient, neo4jClient } = require('./services')

const worker = {
  handleSignal: async name => {
    try {
      await server.stop()
      await mongoClient.stop()
      await neo4jClient.stop()
    } catch (err) {
      console.error(err)
      process.exitCode = 1
    }
  },
  run: async () => {
    const signals = ['SIGINT', 'SIGTERM']
    signals.forEach(signal => {
      process.on(signal, worker.handleSignal.bind(null, signal))
    })
    process.on('exit', async code => {
      console.warn(`process exit with code: ${code}`)
    })
    await mongoClient.start()
    await server.start()
  },
}

module.exports = worker;
