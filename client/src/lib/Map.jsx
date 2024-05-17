"use client";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Map() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const geo = navigator.geolocation;
    geo.getCurrentPosition(userCoords);

    function userCoords(position) {
      let userLatitude = position.coords.latitude;
      let userLongitude = position.coords.longitude;
      setLatitude(userLatitude);
      setLongitude(userLongitude);
    }
  }, []);

  if (latitude === null || longitude === null) {
    return <div>Loading...</div>;
  }

  const position = [latitude, longitude];

  return (
    <div style={{ padding: "50px" }}>
      <MapContainer
        center={position}
        zoom={6}
        style={{
          height: "370px",
          width: "100%",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>You are here.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
