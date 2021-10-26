import { useState } from "react";

import Map from "../molecules/Map";
import DisplayPosition from "../molecules/DisplayPosition";

const MapExternalState = ({ position, heigth, zoom }) => {
    const [map, setMap] = useState();

    return (
        <>
            {/* This condicion is becouse map at first time is null and set after create Map component */}
            {map ? <DisplayPosition center={position} map={map} zoom={zoom} /> : null}
            <Map
                heigth={heigth}
                position={position}
                zoom={zoom}
                whenCreated={setMap}>
            </Map>
        </>
    )
}

export default MapExternalState;
