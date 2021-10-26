
import  LayersControlPanel from '../molecules/LayersControlPanel';
import Map from '../molecules/Map';

const MapLayersControl = ({ height, position, zoom }) => {


    return (
        <Map height={height}
            position={position}
            zoom={zoom}
            scrollWheelZoom={false}>
            <LayersControlPanel position={position} />
        </Map>
    )
}

export default MapLayersControl;
