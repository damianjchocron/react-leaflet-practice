import { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet'

import MarkerIcon from '../atoms/MarkerIcon';

const EventLocationFoundMarker = ({ messagePopup }) => {
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

export default EventLocationFoundMarker;
