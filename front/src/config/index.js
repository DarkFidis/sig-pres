export const config = {
  map: {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    tileLayer: 'http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
    position: [47, 2],
    zoom: 6,
  },
  icon: {
    iconSize: [32,32],
    iconAnchor: [0, 0],
    popupAnchor: [16, 0],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null
  },
  server: {
    url: 'http://localhost:5000/api'
  }
}
