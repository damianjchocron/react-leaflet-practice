import React from 'react';
import styled from 'styled-components';

import MapPopupWithMarker from './components/organims/MapPopupWithMarker';
import MapEventLocationFound from './components/organims/MapEventLocationFound';
import MapVectorLayers from './components/organims/MapVectorLayers';
import MapSvgOverlay from './components/organims/MapSvgOverlay';
import MapLayersControl from './components/organims/MapLayersControl';
import MapBlinkingCircle from './components/organims/MapBlinkingCircle';
import MapDraggableMarker from './components/organims/MapDraggableMarker';
import MapAnimatedPanning from './components/organims/MapAnimatedPanning';
import MapExternalState from './components/organims/MapExternalState';

const StyledApp = styled.div`
  height: 100%;
  padding: 3%;

  h1{
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .mapWrapper{
    margin-bottom: 5rem;
  }
`

const App = () => {

  const height = '50vh';
  const position = [51.505, -0.09];
  const messagePopup = 'This is the message';
  const zoom = 13;

  return (
    <StyledApp>
      <div className="mapWrapper">
        <h1>Map popup with market</h1>
        <MapPopupWithMarker height={height} position={position} messagePopup={messagePopup} zoom={zoom} />
      </div>

      <div className="mapWrapper">
        <h1>Map with event location found on click</h1>
        <MapEventLocationFound height={height} position={position} messagePopup={messagePopup} zoom={zoom} />
      </div>

      <div className="mapWrapper">
        <h1>Map with vector layers</h1>
        <MapVectorLayers height={height} position={position} messagePopup={messagePopup} zoom={zoom} />
      </div>

      <div className="mapWrapper">
        <h1>Map with SvgOverlay</h1>
        <MapSvgOverlay height={height} position={position} messagePopup={messagePopup} zoom={zoom} />
      </div>

      <div className="mapWrapper">
        <h1>Map with Layers control</h1>
        <MapLayersControl height={height} position={position} messagePopup={messagePopup} zoom={zoom} />
      </div>

      <div className="mapWrapper">
        <h1>Map with Blinking Circle</h1>
        <MapBlinkingCircle height={height} position={position} zoom={zoom} />
      </div>

      <div className="mapWrapper">
        <h1>Map with Draggable Maker</h1>
        <MapDraggableMarker height={height} position={position} zoom={zoom} />
      </div>

      <div className="mapWrapper">
        <h1>Map Animated Panning</h1>
        <MapAnimatedPanning height={height} position={position} zoom={zoom} />
      </div>

      <div className="mapWrapper">
        <h1>Map External State</h1>
        <MapExternalState height={height} position={position} zoom={zoom} />
      </div>

    </StyledApp>
  );
}

export default App;
