import { Circle, CircleMarker, Polyline, Polygon, Rectangle, Popup, Tooltip } from 'react-leaflet'

const VectorLayers = ({ position }) => {

    /* TODOD: Move ALL this data to a json file */
    const polyline = [
        [51.505, -0.09],
        [51.51, -0.1],
        [51.51, -0.12],
    ]

    const multiPolyline = [
        [
            [51.5, -0.1],
            [51.5, -0.12],
            [51.52, -0.12],
        ],
        [
            [51.5, -0.05],
            [51.5, -0.06],
            [51.52, -0.06],
        ],
    ]

    const polygon = [
        [51.515, -0.09],
        [51.52, -0.1],
        [51.52, -0.12],
    ]

    const multiPolygon = [
        [
            [51.51, -0.12],
            [51.51, -0.13],
            [51.53, -0.13],
        ],
        [
            [51.51, -0.05],
            [51.51, -0.07],
            [51.53, -0.07],
        ],
    ]

    const rectangle = [
        [51.49, -0.08],
        [51.5, -0.06],
    ]

    const fillBlueOptions = { fillColor: 'blue' };
    const blackOptions = { color: 'black' };
    const limeOptions = { color: 'lime' };
    const purpleOptions = { color: 'purple' };
    const redOptions = { color: 'red' };

    return (
        <>
            <Circle center={position} pathOptions={fillBlueOptions} radius={200} />
            <CircleMarker center={[51.51, -0.12]} pathOptions={redOptions} radius={20}>
                <Popup>Popup in CircleMarker</Popup>
            </CircleMarker>
            <Polyline pathOptions={limeOptions} positions={polyline} >
                <Tooltip>Tooltip for Marker</Tooltip>
            </Polyline>
            <Polyline pathOptions={limeOptions} positions={multiPolyline} />
            <Polygon pathOptions={purpleOptions} positions={polygon} />
            <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
            <Rectangle bounds={rectangle} pathOptions={blackOptions} />
        </>
    )
}

export default VectorLayers;