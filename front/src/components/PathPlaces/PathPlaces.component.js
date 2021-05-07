import React, { PureComponent } from 'react'
import { Marker } from 'react-leaflet'

class PathPlaces extends PureComponent {
  render() {
    const {nodes} = this.props
    return (
      <div>
        {nodes.map((node, index) => {
            return (
              <Marker position={node.coordinates} key={`path#${index}`}>
              </Marker>
            )
        })}
      </div>
    )
  }
}

export default PathPlaces
