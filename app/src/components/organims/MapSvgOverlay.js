import PropTypes from 'prop-types';
import Map from '../molecules/Map';
import SvgOverlay from '../molecules/SvgOverlay';

const MapSvgOverlay = ({ height, position, messagePopup, zoom }) => {
    /* TODOD: add state for the props */
    const bounds = [
        [51.49, -0.08],
        [51.5, -0.06],
    ]

    return (
        <Map height={height}
            position={position}
            zoom={zoom}
            scrollWheelZoom={false}>
            <SvgOverlay messagePopup={messagePopup} bounds={bounds} />
        </Map>
    )
}

export default MapSvgOverlay;

MapSvgOverlay.propTypes = {
    height: PropTypes.string,
    position: PropTypes.array.isRequired,
    messagePopup: PropTypes.string.isRequired,
    zoom: PropTypes.number.isRequired
}
