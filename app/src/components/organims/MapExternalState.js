import { useState, useCallback, useEffect, useMemo } from "react";
import Map from "../molecules/Map";

const DisplayPosition = ({ map, center, zoom }) => {
    const [position, setPosition] = useState(map.getCenter())

    const onClick = useCallback(() => {
        map.setView(center, zoom)
    }, [map])

    const onMove = useCallback(() => {
        setPosition(map.getCenter())
    }, [map])

    useEffect(() => {
        map.on('move', onMove)
        return () => {
            map.off('move', onMove)
        }
    }, [map, onMove])

    return (
        <p>
            latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
            <button onClick={onClick}>reset</button>
        </p>
    )
}

const MapExternalState = ({ position, heigth, zoom }) => {
    const [map, setMap] = useState(null)

    const displayMap = useMemo(
        () => (
            <Map
                heigth={heigth}
                position={position}
                zoom={zoom}
                whenCreated={setMap}>
            </Map>
        ),
        [],
    )

    return (
        <div>
            {map ? <DisplayPosition center={position} map={map} zoom={zoom} /> : null}
            {displayMap}
        </div>
    )
}

export default MapExternalState;