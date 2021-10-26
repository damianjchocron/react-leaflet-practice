import { useState, useMemo } from "react";

import Map from "../molecules/Map";
import DisplayPosition from "../molecules/DisplayPosition";

const MapExternalState = ({ position, heigth, zoom }) => {
    const [map, setMap] = useState(null)

    return (
        <div>
            <DisplayPosition center={position} map={map} zoom={zoom} />
            <Map
                heigth={heigth}
                position={position}
                zoom={zoom}
                whenCreated={setMap}>
            </Map>
        </div>
    )
}

export default MapExternalState;
