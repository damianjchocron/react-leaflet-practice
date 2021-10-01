import PropTypes from 'prop-types';
import Map from '../molecules/Map';
import { Marker, Popup } from 'react-leaflet'

const PopupWithMarket = ({ position, messagePopup }) => {
    return (
        <Marker position={position}>
            <Popup>
                {messagePopup}
            </Popup>
        </Marker>
    )
}

const MapPopupWithMarket = ({ height, position, messagePopup, zoom }) => {
    return (
        <Map height={height}
            position={position}
            zoom={zoom}
            scrollWheelZoom={false}
            CustonMarket={<PopupWithMarket position={position} messagePopup={messagePopup} />}
        />
    )
}

export default MapPopupWithMarket;

MapPopupWithMarket.propTypes = {
    height: PropTypes.string,
    position: PropTypes.array.isRequired,
    messagePopup: PropTypes.string.isRequired,
    zoom: PropTypes.number.isRequired
}
