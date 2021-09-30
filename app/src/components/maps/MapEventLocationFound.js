import { useState } from 'react';
import PropTypes from 'prop-types';
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import Map from './Map';

const MapEventLocationFound = ({ height, position, messagePopup, zoom }) => {

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
            <Marker position={position}>
                <Popup>{messagePopup}</Popup>
            </Marker>
        )
    }

    return (
        <Map height={height}
            position={position}
            zoom={zoom}
            scrollWheelZoom={false}
            CustonMarket={<LocationMarker position={position} messagePopup={messagePopup} />}
        />
    )
}

export default MapEventLocationFound;

MapEventLocationFound.propTypes = {
    height: PropTypes.string,
    position: PropTypes.array.isRequired,
    messagePopup: PropTypes.string.isRequired,
    zoom: PropTypes.number.isRequired
}
