import React, { PureComponent } from "react";
import { useMap } from "react-leaflet";

class MapInfo extends PureComponent {
  componentDidMount() {
    this.createOriginListener()
    const { map, center, zoom } = this.props;
    map.flyTo(center, zoom)
  }

  createOriginListener() {
    const { map } = this.props
    map.addEventListener('click', e => {
      const { lat, lng } = e.latlng
      this.props.setOrigin([lat, lng])
    })
  }

  render() {
    return null;
  }
}

function withMap(Component) {
  return function WrappedComponent(props) {
    const map = useMap();
    return <Component {...props} map={map} />;
  };
}

export default withMap(MapInfo);
