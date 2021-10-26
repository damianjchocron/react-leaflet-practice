import PropTypes from 'prop-types';

import Map from '../molecules/Map';
import EventLocationFoundMarker from '../molecules/EventLocationFoundMarker';

const MapEventLocationFound = ({ height, position, messagePopup, zoom }) =>
(
    <Map height={height}
        position={position}
        zoom={zoom}
        scrollWheelZoom={false}>
        <EventLocationFoundMarker position={position} messagePopup={messagePopup} />
    </Map>
)


export default MapEventLocationFound;

MapEventLocationFound.propTypes = {
    height: PropTypes.string,
    position: PropTypes.array.isRequired,
    messagePopup: PropTypes.string.isRequired,
    zoom: PropTypes.number.isRequired
}
