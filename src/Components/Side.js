import React from "react";
import "./side.css";
import { FlyToInterpolator } from "react-map-gl";

function Side({ viewport, setViewport, locationN }) {
  const goToMarker1 = () => {
    setViewport({
      ...viewport,
      latitude: 28.588512,
      longitude: 77.04682,
      zoom: 16,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
      // transitionEasing:
    });
  };

  const goToMarker2 = () => {
    setViewport({
      ...viewport,
      latitude: 28.589316,
      longitude: 77.039506,
      zoom: 16,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
      // transitionEasing:
    });
  };

  const goToMarker3 = () => {
    setViewport({
      ...viewport,
      latitude: 28.592086,
      longitude: 77.04615,
      zoom: 16,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
      // transitionEasing:
    });
  };

  const alerts = locationN.filter((x) => x.color === "red");

  return (
    <div className="Sidebar">
      <h3>Gas Detection Report</h3>
      <button onClick={goToMarker1}>Sewer A</button>

      <button onClick={goToMarker2}>Sewer B</button>

      <button onClick={goToMarker3}>Sewer C</button>
      <br />
      {alerts.map((alert) => (
        <h5 key={alert.name}>Leakage detected at Gutter {alert.name}</h5>
      ))}
    </div>
  );
}

export default Side;
