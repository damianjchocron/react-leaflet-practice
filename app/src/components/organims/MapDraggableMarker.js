import { useState, useRef, useMemo, useCallback } from 'react';
import { Marker, Popup } from 'react-leaflet'
import MarkerIcon from '../atoms/MarkerIcon';

import Map from '../molecules/Map';

const DraggableMarker = ({ center }) => {
    const [draggable, setDraggable] = useState(false);
    const [position, setPosition] = useState(center);
    const markerRef = useRef(null);
    const eventHandlers = useMemo(() => ({
        dragend() {
            const marker = markerRef.current
            if (marker != null) setPosition(marker.getLatLng())
        },
    }),
        [],
    );
    const toggleDraggable = useCallback(() => {
        setDraggable((d) => !d)
    }, []);

    return (
        <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}
            icon={MarkerIcon}>
            <Popup minWidth={90}>
                <span onClick={toggleDraggable}>
                    {draggable
                        ? 'Marker is draggable'
                        : 'Click here to make marker draggable'}
                </span>
            </Popup>
        </Marker>
    )
}

const MapDraggableMarker = ({ height, position, zoom }) => {

    return (
        <Map height={height}
            position={position}
            zoom={zoom}
            scrollWheelZoom={false}
            CustonMarket={<DraggableMarker center={position} />}
        />)
}

export default MapDraggableMarker;
