import React, { PureComponent } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { config } from '../../config'
import './Path.css'

import PathPlaces from '../../components/PathPlaces/PathPlaces.component'
import Network from '../../components/Network/Network.component'
import FormCard from '../../components/FormCard/FormCard.component'
import PathForm from '../../components/PathForm/PathForm.component'
import ShortestPath from '../../components/ShortestPath/ShortestPath.component'
import { getShortestPath, getVillageLocations } from '../../services'

import {  } from '../../services'

class Path extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      nodes: null,
      path: null,
      showNetwork: false,
    }
  }

  componentDidMount() {
    getVillageLocations().then(data => {
      this.setState({
        nodes: data
      })
    })
  }

  toggleNetwork() {
    this.setState(prevState => ({
      showNetwork: !prevState.showNetwork
    }))
  }

  findPath(mode) {
    getShortestPath(mode).then(data => {
      this.setState({
        path: data.data
      })
    })
  }

  render() {
    return (
      <div>
        <MapContainer center={[43.53435, 3.428121]} zoom={18} scrollWheelZoom={true}>
          <TileLayer
            attribution={config.map.attribution}
            url={config.map.tileLayer}
          />
          {this.state.nodes && this.state.showNetwork && (
            <PathPlaces nodes={this.state.nodes}></PathPlaces>
          )}
          {this.state.showNetwork && (
            <Network />
          )}
          {this.state.path && (
            <ShortestPath path={this.state.path} />
          )}
          <FormCard title='Trouvez votre chemin'>
            <PathForm toggleNetwork={this.toggleNetwork.bind(this)} showNetwork={this.state.showNetwork} findPath={this.findPath.bind(this)} />
          </FormCard>
        </MapContainer>
      </div>
    )
  }
}

export default Path
