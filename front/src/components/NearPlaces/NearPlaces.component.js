import React, { PureComponent } from 'react'
import { Marker, Popup, Circle } from 'react-leaflet'
import L from 'leaflet'

import { config } from '../../config'

import PlaceCard from '../../components/PlaceCard/PlaceCard.component'

import { iconUrlStrategies } from '../../assets'

class NearPlaces extends PureComponent {
  getIcon = type => {
    return L.icon({
      iconUrl: iconUrlStrategies[type],
      ...config.icon
    })
  }

  render() {
    const { places, options, origin } = this.props
    const { minDistance, maxDistance } = options
    return (
      <div>
        {places.map((place, index) => {
          const { location, properties } = place
          const { address, name, rating, type, website } = properties
          return (
            <Marker position={location.coordinates} key={`place#${index}`} icon={this.getIcon(type)}>
              <Popup>
                <PlaceCard address={address} name={name} rating={rating} website={website} type={type} />
              </Popup>
            </Marker>
          )
        })}
        { maxDistance > 0  && (
          <Circle
            center={origin}
            pathOptions={{ fillColor: 'green', color: 'none', fillOpacity: 0.4 }}
            radius={maxDistance}>
          </Circle>
        )}
        { minDistance > 0 && minDistance < maxDistance  && (
          <Circle
            center={origin}
            pathOptions={{ fillColor: 'red', color: 'none' }}
            radius={minDistance}>
          </Circle>
        )}
      </div>
    )
  }
}

export default NearPlaces
