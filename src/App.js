import "./App.css";
import Map from "./Components/Map.js";
import React, { useState } from "react";
import Side from "./Components/Side";
import NavbarUpper from "./Components/NavbarUpper";

const App = () => {
  const [viewport, setViewport] = useState({
    latitude: 28.588485,
    longitude: 77.046814,
    zoom: 16,
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [locationN, setLocationN] = useState([
    {
      name: "A",
      latitude: 28.588512,
      longitude: 77.04682,
      color: "black",
    },
    {
      name: "B",
      latitude: 28.589316,
      longitude: 77.039506,
      color: "black",
    },
    {
      name: "C",
      latitude: 28.592086,
      longitude: 77.04615,
      color: "black",
    },
  ]);

  return (
    <div className="App">
      <NavbarUpper />
      <Side
        viewport={viewport}
        setViewport={setViewport}
        locationN={locationN}
      />
      <Map
        viewport={viewport}
        setViewport={setViewport}
        locationN={locationN}
        setLocationN={setLocationN}
      />
    </div>
  );
};
export default App;
