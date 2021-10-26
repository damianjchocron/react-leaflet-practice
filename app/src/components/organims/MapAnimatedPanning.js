import Map from "../molecules/Map";
import SetViewOnClick from "../molecules/SetViewOnClick";

const MapAnimatedPanning = ({ position, zoom, height }) => {
    return (
        <>
            <Map position={position} zoom={zoom} scrollWheelZoom={false} height={height} >
                <SetViewOnClick />
            </Map>
        </>
    )
}

export default MapAnimatedPanning;
