const Place = require('../models/Place')

const getAllPlaces = async (req, res, next) => {
  const places = await Place.find().exec()
  res.json(places)
}

const getNearbyPlaces = async (req, res, next) => {
  const { origin, maxDistance, minDistance, type, minNote, maxNote } = req.body
  if (!origin) {
    res.status(400).json({ error: 'La requête doit avoir un point d\'origine'})
  }
  if (!maxDistance && !minDistance) {
    res.status(400).json({ error: 'La requête doit avoir au moins un paramètre de distance'})
  }
  const min = minDistance ? minDistance : 0
  const max = maxDistance ? maxDistance : 10000
  try {
    const places = await Place.getNear(origin, min, max)
    res.json(places)
  } catch(err) {
    res.status(503).json(err.message)
  }
}

module.exports = {
  getAllPlaces,
  getNearbyPlaces,
}
