const rp = require('request-promise')

const {config } = require('../config')

const getAllPlaces = async () => {
  try {
    const places = await rp({
      uri: `${config.server.url}/place`,
      json: true
    })
    return places
  } catch(err) {
    console.log('ERREUR : ', err)
    return []
  }
}

const getCity = async cityUrl => {
  try {
    const city = await rp({
      uri: `${config.server.url}/city/${cityUrl}`,
      json: true
    })
    return city
  } catch (err) {
    console.log(err)
  }
}

const getNearPlaces = async requestBody => {
  try {
    const cities = await rp({
      method: 'POST',
      uri: `${config.server.url}/place`,
      json: true,
      body: requestBody,
    })
    return cities
  } catch (err) {
    console.log(err)
  }
}

const getShortestPath = async mode => {
  try {
    const path = await rp({
      method: 'POST',
      url: `${config.server.url}/dijkstra`,
      json: true,
      body: { mode }
    })
    return path
  } catch (err) {
    console.log(err)
  }
}

const getVillageLocations = async () => {
  try {
    return rp({
      url: `${config.server.url}/path`,
      json: true
    })
  } catch (err) {
    console.log(err)
  }
}

export {
  getAllPlaces,
  getCity,
  getNearPlaces,
  getShortestPath,
  getVillageLocations
}
