import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const StyledMap = styled.div`
    .leaflet-container{
        height: ${props => props.height ? props.height : '25vh'}; 
    }
`

const MapPopupWithMarket = ({ height, position, messagePopup, zoom }) => {
    return (
        <StyledMap height={height}>
            <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        {messagePopup}
                    </Popup>
                </Marker>
            </MapContainer>
        </StyledMap>
    )
}

export default MapPopupWithMarket;

MapPopupWithMarket.propTypes = {
    height: PropTypes.string,
    position: PropTypes.array.isRequired,
    messagePopup: PropTypes.string.isRequired,
    zoom: PropTypes.number.isRequired
}
