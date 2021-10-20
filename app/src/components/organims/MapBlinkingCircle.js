import PropTypes from 'prop-types';
import { Circle } from 'react-leaflet';
import Blinking from '../molecules/Blinking';
import Map from "../molecules/Map";

const MapBlinkingCircle = ({ height, position, zoom }) => {

  const radius = 200;
  const fillOptions = { fillColor: 'blue' };
  const interval = 1000

  return (
    <Map height={height} position={position} zoom={zoom} scrollWheelZoom={false}>
      <Blinking interval={interval}>
        <Circle center={position} pathOptions={fillOptions} radius={radius} />
      </Blinking>
    </Map >
  )
}

export default MapBlinkingCircle;

MapBlinkingCircle.propTypes = {
  height: PropTypes.string,
  position: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired
}
