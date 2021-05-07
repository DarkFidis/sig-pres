import React, { PureComponent } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { config } from '../../config'
import MapInfo from '../../components/MapInfo/MapInfo.component'
import FormCard from '../../components/FormCard/FormCard.component'
import NearOrigin from '../../components/NearOrigin/NearOrigin.component'
import NearPlaces from '../../components/NearPlaces/NearPlaces.component'
import NearRequestForm from '../../components/NearRequestForm/NearRequestForm.component'
import './Near.css'

import { getCity, getNearPlaces } from '../../services'

class MyMap extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      position: null,
      nearOptions: {},
      places: null,
      zoom: null,
      origin: null,
      options: null
    }
  }

  componentDidMount() {
    const { city } = this.props.match.params
    getCity(city).then(city => {
      if (!city) {
        this.setState({
          position: config.map.position,
          zoom: config.map.zoom
        })
        return
      }
      const { center, zoom } = city
      this.setState({
        position: center,
        zoom: zoom
      })
    })
  }

  nearRequestHandler = options => {
    const { origin } = this.state
    const { minDistance, maxDistance } = options
    if (!origin || (!minDistance && !maxDistance)) {
      console.error('No origin available for request')
      return
    }
    const body = {
      origin,
      maxDistance,
      minDistance,
    }
    getNearPlaces(body).then(cities => {
      this.setState({
        places: cities,
        options,
      })
    })
  }

  setOrigin = coordinates => {
    this.setState({
      origin: coordinates,
      places: null
    })
  }

  render() {
    const { position, zoom } = this.state
    return (
      <div>
        <MapContainer center={config.map.position} zoom={config.map.zoom} scrollWheelZoom={true}>
          <TileLayer
            attribution={config.map.attribution}
            url={config.map.tileLayer}
          />
          { this.state.position ? (
            <MapInfo center={position} zoom={zoom} setOrigin={this.setOrigin} />
          ) : ''}
          { this.state.origin && (
            <NearOrigin origin={ this.state.origin } />
          )}
          { this.state.places && this.state.options && (
            <NearPlaces places={this.state.places} options={this.state.options} origin={this.state.origin} />
          )}
        </MapContainer>
        <FormCard title={'Trouvez votre bonheur'}>
          <NearRequestForm requestSubmitter={ this.nearRequestHandler } origin={ this.state.origin } />
        </FormCard>
      </div>
    )
  }
}

export default MyMap
