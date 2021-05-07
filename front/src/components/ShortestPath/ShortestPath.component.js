import React, { PureComponent } from 'react'
import { Polyline } from 'react-leaflet'

class ShortestPath extends PureComponent {
  render() {
    const { path } = this.props
    console.log('PATH : ', path)
    const lineStyle = { color: 'orange', weight: 10 }
    return (
      <div>
        <Polyline positions={path} pathOptions={lineStyle} />
      </div>
    )
  }
}

export default ShortestPath
