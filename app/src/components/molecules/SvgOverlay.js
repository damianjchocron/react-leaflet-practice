import PropTypes from 'prop-types';
import { SVGOverlay } from 'react-leaflet'

/* TODOD: añadir props */
const SvgOverlay = ({ bounds, messagePopup }) => {
    return (
        <SVGOverlay attributes={{ stroke: 'red' }} bounds={bounds}>
            <rect x="0" y="0" width="100%" height="100%" fill="blue" />
            <circle r="5" cx="10" cy="10" fill="red" />
            <text x="50%" y="50%" stroke="white">
                {messagePopup}
            </text>
        </SVGOverlay>
    )
}

export default SvgOverlay;

/* TODOD: add propTypes */