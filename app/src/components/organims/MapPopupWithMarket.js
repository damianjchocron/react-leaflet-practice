import PropTypes from 'prop-types';
import Map from '../molecules/Map';
import { Marker, Popup } from 'react-leaflet';
import MarkerIcon from '../atoms/MarkerIcon';

/* TODOD: move this to a component */
const PopupWithMarket = ({ position, messagePopup }) => {
    /* TODOD: add state for the props */

    return (
        <Marker position={position} icon={MarkerIcon}>
            <Popup>
                {messagePopup}
            </Popup>
        </Marker>
    )
}

const MapPopupWithMarket = ({ height, position, messagePopup, zoom }) => {
    /* TODOD: add state for the props */

    return (
        <Map height={height}
            position={position}
            zoom={zoom}
            scrollWheelZoom={false}>
            <PopupWithMarket position={position} messagePopup={messagePopup} />
        </Map>
    )
}

export default MapPopupWithMarket;

MapPopupWithMarket.propTypes = {
    height: PropTypes.string,
    position: PropTypes.array.isRequired,
    messagePopup: PropTypes.string.isRequired,
    zoom: PropTypes.number.isRequired
}
