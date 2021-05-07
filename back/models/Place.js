const mongoose = require('mongoose');
const Schema = mongoose.Schema

const placeSchema = new Schema({
  type: {
    type: String,
    default: "Feature"
  },
  properties: {
    name: String,
    website: {
      type: String,
      default: ''
    },
    address: {
      street: {
        type: String,
        default: ''
      },
      postalCode: {
        type: String,
        default: "00000",
      },
      city: {
        type: String,
        default: ''
      },
    },
    rating: Number,
    type: {
      type: String,
      default: "r"
    }
  },
  location: {
    type: {
      type: String
    },
    coordinates: {
      type: [Number]
    }
  }
});

placeSchema.statics.getNear = (origin, minDistance, maxDistance) => Place.find({
  location: {
    $near: {
      $geometry: {
       type: "Point",
       coordinates: origin
     },
     $maxDistance: maxDistance,
     $minDistance: minDistance
    }
 }
}).exec()

placeSchema.index({ location: "2dsphere" })

const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
