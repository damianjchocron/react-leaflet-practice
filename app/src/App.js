import React from 'react';
import styled from 'styled-components';
import MapPopupWithMarket from './components/maps/MapPopupWithMarket';

const StyledApp = styled.div`
  height: 100%;
  padding: 3%;

  h1{
    text-align: center;
    margin-bottom: 2rem;
  }
`


const App = () => {

  const height = '50vh';
  const position = [51.505, -0.09];
  const messagePopup = 'This is the message';
  const zoom = 13;

  return (
    <StyledApp>
      <h1>Map popup with market</h1>
      <MapPopupWithMarket height={height} position={position} messagePopup={messagePopup} zoom={zoom} />
    </StyledApp>
  );
}

export default App;
