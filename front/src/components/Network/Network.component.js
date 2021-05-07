import React, { PureComponent } from 'react'
import { Polyline } from 'react-leaflet'

class Network extends PureComponent {
  render() {
    const line1 = [[43.533685, 3.428233],[43.533798, 3.428067],[43.533984, 3.427783],[43.534109, 3.427616],[43.534342, 3.427895],[43.53468, 3.427933],[43.534649, 3.428046],[43.534653, 3.428174],[43.534692, 3.428287],[43.53494, 3.428084]]
    const line2 = [[43.533798, 3.428067],[43.534322, 3.428743],[43.534544, 3.428534],[43.534692, 3.428287]]
    const line3 = [[43.534544, 3.428534],[43.533984, 3.427783]]
    const lineStyle = { color: 'purple' }
    return (
      <div>
        <Polyline positions={line1} pathOptions={lineStyle} />
        <Polyline positions={line2} pathOptions={lineStyle} />
        <Polyline positions={line3} pathOptions={lineStyle} />
      </div>
    )
  }
}

export default Network
