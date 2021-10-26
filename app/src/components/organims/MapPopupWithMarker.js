import PropTypes from 'prop-types';

import Map from '../molecules/Map';
import PopupWithMarker from '../molecules/PopupWithMarker';

const MapPopupWithMarker = ({ height, position, messagePopup, zoom }) => {

    return (
        <Map height={height}
            position={position}
            zoom={zoom}
            scrollWheelZoom={false}>
            <PopupWithMarker position={position} messagePopup={messagePopup} />
        </Map>
    )
}

export default MapPopupWithMarker;

MapPopupWithMarker.propTypes = {
    height: PropTypes.string,
    position: PropTypes.array.isRequired,
    messagePopup: PropTypes.string.isRequired,
    zoom: PropTypes.number.isRequired
}
