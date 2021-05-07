import React, { PureComponent } from 'react'
import { Marker, Popup } from 'react-leaflet'

class NearOrigin extends PureComponent {

  render() {
    const { origin } = this.props
    return (
      <Marker position={origin}>
        <Popup>
          <p> Origine de la requête de proximité</p>
        </Popup>
      </Marker>
    )
  }
}

export default NearOrigin
