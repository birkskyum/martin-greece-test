import { onMount, Component } from 'solid-js';
import maplibregl, { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { css } from 'solid-styled-components';
import { getViewState } from './App';

import style from './style.json';

export const MapLibre: Component = () => {
  let maplibreContainer: HTMLElement;
  let map: Map;



  onMount(async () => {
    const mayStyle = (map = new maplibregl.Map({
      center: [getViewState().longitude, getViewState().latitude],
      zoom: getViewState().zoom,
      bearing: getViewState().bearing,
      pitch: getViewState().pitch,
      container: maplibreContainer,
      style: style,
      interactive: true,
      hash: true,
    }));
    map.on('load', async () => {

      // change the source of the map style to greecesource.json

      // 

      const newStyle = map.getStyle();
      
      map.setStyle(newStyle);

      
      // map.addSource('datasource', {
      //   type: 'vector',
      //   url: 'http://49.12.245.30:3000/greece',
      // });


      // map.addLayer({
      //   id: 'points',
      //   type: 'circle',
      //   source: 'datasource',
      //   'source-layer': 'function_zxy_query',
      //   paint: {
      //     'circle-color': 'blue'
      //   },
      // });

    });
  });

  http: return (
    <div>
      <div
        ref={(r) => {
          maplibreContainer = r;
        }}
        class={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        `}
      />
    </div>
  );
};
