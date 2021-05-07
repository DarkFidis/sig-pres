let mongoose = require('mongoose');

let citySchema = new mongoose.Schema({
  name: String,
  lat: Number,
  lng: Number,
  zoom: Number,
  url: String,
});

citySchema.statics.getByName = name => City.findOne({ name })
citySchema.statics.getByUrl = url => City.findOne({ url })

let City = mongoose.model("City", citySchema);

module.exports = City;
