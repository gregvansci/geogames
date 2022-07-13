import React from "react";
import ReactDOM from "react-dom"
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";



export default function WelcomeMap () {

  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  console.log(randomColor);

  return (
    <div>
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147
        }}
      >
        <Sphere stroke="#1F2937" strokeWidth={0.5} fill="#E4E5E6" id="" />
        <Graticule stroke="#1F2937" strokeWidth={0.5} />
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} fill="#1F2937" />
            ))
          }
        </Geographies>
        
      </ComposableMap>
    </div>
  )
}