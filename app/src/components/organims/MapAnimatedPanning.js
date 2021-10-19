import { useRef } from "react";
import { useMapEvent } from "react-leaflet";
import Map from "../molecules/Map";

const SetViewOnClick = ({ animateRef }) => {
    const map = useMapEvent('click', (e) => {
        map.setView(e.latlng, map.getZoom(), {
            animate: animateRef.current || false,
        })
    })

    return null
}

const MapAnimatedPanning = ({ position, zoom, height }) => {
    const animateRef = useRef(false)

    return (
        <>
            <p>
                <label>
                    <input
                        type="checkbox"
                        onChange={() => {
                            animateRef.current = !animateRef.current
                        }}
                    />
                    Animate panning
                </label>
            </p>
            <Map position={position} zoom={zoom} scrollWheelZoom={false} height={height} >
                <SetViewOnClick animateRef={animateRef} />
            </Map>
        </>
    )
}

export default MapAnimatedPanning;
