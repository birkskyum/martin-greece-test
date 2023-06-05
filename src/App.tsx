import { Component, createSignal } from 'solid-js';
import { MapLibre } from './MapLibre';

export const [getViewState, setViewState] = createSignal({
  longitude: 23.727539,
  latitude: 37.983810,
  zoom: 6,
  maxZoom: 20,
  pitch: 30,
  bearing: 0,
  transitionDuration: 0,
});

const App: Component = () => {
  return (
    <div>
      <MapLibre />
    </div>
  );
};

export default App;
