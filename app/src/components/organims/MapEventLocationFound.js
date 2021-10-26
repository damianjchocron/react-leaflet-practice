import { useState } from 'react';
import PropTypes from 'prop-types';
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import Map from '../molecules/Map';
import MarkerIcon from '../atoms/MarkerIcon';

/* TODOD: move this to a component */
const MapEventLocationFound = ({ height, position, messagePopup, zoom }) => {
    /* TODOD: add state for the props */

    /* TODOD: add useCallback to LocationMarket */
    const LocationMarker = () => {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                setPosition(e.latlng)
                map.flyTo(e.latlng, map.getZoom())
            },
        })

        return position === null ? null : (
            <Marker position={position} icon={MarkerIcon}>
                <Popup>{messagePopup}</Popup>
            </Marker>
        )
    }

    return (
        <Map height={height}
            position={position}
            zoom={zoom}
            scrollWheelZoom={false}>
            <LocationMarker position={position} messagePopup={messagePopup} />
        </Map>
    )
}

export default MapEventLocationFound;

MapEventLocationFound.propTypes = {
    height: PropTypes.string,
    position: PropTypes.array.isRequired,
    messagePopup: PropTypes.string.isRequired,
    zoom: PropTypes.number.isRequired
}
