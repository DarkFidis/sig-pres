const app = require('./app')
const config = require('./config')

let connection
const server = {
  start: () => {
    connection = app.listen(config.PORT, () => {
      console.log(`Server started on port ${config.PORT}`)
    });
  },
  stop: () => {
    if (!connection) {
      console.warn('No server found')
      return
    }
    connection.close(() => {
      console.log('Server closed')
    })
  }
}

module.exports = server
