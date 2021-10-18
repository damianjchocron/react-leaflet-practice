import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const StyledMap = styled.div`
    .leaflet-container{
        height: ${props => props.height ? props.height : '25vh'}; 
    }
`

/* TODOD: change the name of CustomMarket for other more properly */
const Map = ({ height, position, zoom, CustonMarket, children }) => {
    /* TODOD: add state for the props */

    return (
        <StyledMap height={height}>
            <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {CustonMarket}

                {children && children}

            </MapContainer>
        </StyledMap>
    )
}

export default Map;

Map.propTypes = {
    height: PropTypes.string,
    position: PropTypes.array.isRequired,
    zoom: PropTypes.number.isRequired,
    CustonMarket: PropTypes.element
}
