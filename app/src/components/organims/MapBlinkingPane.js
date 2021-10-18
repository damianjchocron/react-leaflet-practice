import { useState, useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import { Pane, Rectangle } from 'react-leaflet';

import Map from "../molecules/Map";

const BlinkingPane = ({ outer }) => {
  const [render, setRender] = useState(true)
  const timerRef = useRef()
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setRender((r) => !r)
    }, 5000)
    return () => {
      clearInterval(timerRef.current)
    }
  }, [])

  return render ? (
    <Pane name="cyan-rectangle" style={{ zIndex: 500 }}>
      <Rectangle bounds={outer} pathOptions={{ color: 'cyan' }} />
    </Pane>
  ) : null
}

const MapBlinkingPan = ({ height, position, zoom }) => {

  const outer = [
    [50.505, -29.09],
    [52.505, 29.09],
  ]
  const inner = [
    [49.505, -2.09],
    [53.505, 2.09],
  ]

  return (
    <Map height={height} position={position} zoom={zoom} scrollWheelZoom={false}>
      <BlinkingPane outer={outer} />
      <Pane name="yellow-rectangle" style={{ zIndex: 499 }}>
        <Rectangle bounds={inner} pathOptions={{ color: 'yellow' }} />
        <Pane name="purple-rectangle">
          <Rectangle bounds={outer} pathOptions={{ color: 'purple' }} />
        </Pane>
      </Pane>
    </Map >
  )
}

export default MapBlinkingPan;

MapBlinkingPan.propTypes = {
  height: PropTypes.string,
  position: PropTypes.array.isRequired,
  messagePopup: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired
}
