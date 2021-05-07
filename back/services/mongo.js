const mongoose = require('mongoose');

let connection;
const mongoClient = {
  start: () => {
    return new Promise((res, rej) => {
      try {
        mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
          connection = mongoose.connection
          console.log('Mongo client started')
        });
        res()
      } catch(err) {
        console.log('Mongo Client not started')
        console.log('MONGO ERROR : ', err.message)
        rej()
      }
    })
  },
  stop: () => {
    return new Promise((res, rej) => {
      try {
        if (!connection) {
          console.warn('No connection found !')
          res()
        }
        connection.close()
        console.log('Mongo client stopped')
        res()
      } catch(err) {
        rej(err)
      }
    })
  }
}

module.exports = mongoClient
