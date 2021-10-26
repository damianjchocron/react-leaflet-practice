import { Marker, Popup } from "react-leaflet";

import MarkerIcon from '../atoms/MarkerIcon';

const PopupWithMarker = ({ position, messagePopup }) => {

    return (
        <Marker position={position} icon={MarkerIcon}>
            <Popup>
                {messagePopup}
            </Popup>
        </Marker>
    )
}

export default PopupWithMarker;
