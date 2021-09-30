import React from 'react';
import styled from 'styled-components';
import MapPopupWithMarket from './components/maps/MapPopupWithMarket';
import MapEventLocationFound from './components/maps/MapEventLocationFound';

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
        <MapPopupWithMarket height={height} position={position} messagePopup={messagePopup} zoom={zoom} />
      </div>

      <div className="mapWrapper">
        <h1>Map with event location found on click</h1>
        <MapEventLocationFound height={height} position={position} messagePopup={messagePopup} zoom={zoom} />
      </div>
    </StyledApp>
  );
}

export default App;
