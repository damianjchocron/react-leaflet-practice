import PropTypes from 'prop-types';

import Map from '../molecules/Map';
import VectorLayers from '../molecules/VectorLayers';

const MapVectorLayers = ({ height, position, messagePopup, zoom }) =>
(
    <Map height={height}
        position={position}
        zoom={zoom}
        scrollWheelZoom={false}>
        <VectorLayers position={position} messagePopup={messagePopup} />
    </Map>
)

export default MapVectorLayers;

MapVectorLayers.propTypes = {
    height: PropTypes.string,
    position: PropTypes.array.isRequired,
    messagePopup: PropTypes.string.isRequired,
    zoom: PropTypes.number.isRequired
}
