const City = require('../models/City')

const getCityMw = async (req, res, next) => {
  const cityUrl = req.params.city
  const city = await City.getByUrl(cityUrl)
  if (!city) {
    res.status(400).json({ error: 'Ville non trouvée' })
    return
  }
  const { lat, lng, zoom } = city
  res.status(200).json({
    center: [lat, lng],
    zoom,
  })
}

module.exports = {
  getCityMw
}
