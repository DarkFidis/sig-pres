const express = require('express');

const { corsOptions } = require('../config')
const { getCityMw } = require('../middlewares/cities')
const { getAllPlaces, getNearbyPlaces } = require('../middlewares/places')
const { getNeo4jDataMw, getShortestPathByDistanceMw } = require('../middlewares/path')

const router = express.Router();

router.get('/city/:city', getCityMw)
router.get('/place', getAllPlaces)
router.post('/place', getNearbyPlaces)
router.get('/path', getNeo4jDataMw)
router.post('/dijkstra', getShortestPathByDistanceMw)

module.exports = router;
