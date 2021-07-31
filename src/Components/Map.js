import React, { useState } from "react";
import ReactMapGL, { FlyToInterpolator, Marker } from "react-map-gl";
import blackImg from "../media/Green.png";
import redImg from "../media/redImg.png";

export default function Map({
  viewport,
  setViewport,
  locationN,
  setLocationN,
}) {
  const markers = locationN.map((mark) => (
    <Marker key={mark.name} longitude={mark.longitude} latitude={mark.latitude}>
      <img
        src={mark?.color === "red" ? redImg : blackImg}
        width={30}
        alt="Marker"
      />
    </Marker>
  ));

  const handleBtnClick = (id) => {
    const newMarkerData = locationN.map((x) => {
      if (x.name === id) {
        return { ...x, color: x.color === "red" ? "black" : "red" };
      }
      return x;
    });
    setLocationN(newMarkerData);
  };

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken={
        "pk.eyJ1Ijoia2FrczA3MCIsImEiOiJja3A1eDJxa28xeTd1MzJtd2FxMzJteWlqIn0.Ljyvl-EQWZoDLD1eg1U-XA"
      }
      {...viewport}
      onViewportChange={(newViewport) => setViewport(newViewport)}
    >
      {markers}
      <div className="buttons-edit">
        {locationN.map((markBtn, i) => {
          return (
            <button
              key={markBtn.name}
              onClick={() => handleBtnClick(markBtn.name)}
            >
              Sewer {markBtn.name}
            </button>
          );
        })}
      </div>
    </ReactMapGL>
  );
}
