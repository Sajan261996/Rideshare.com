import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./Map.css";

const containerStyle = {
  width: "100%",
  height: "400px", // Adjust height as needed
};

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const Map = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          setError("Geolocation permission denied. Enable location access.");
          console.error("Error getting location:", error);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  }, []);

  return (
    <div className="map-container">
      <div className="map-box">
        <h2>My Location</h2>
        {error ? (
          <p className="error">{error}</p>
        ) : location ? (
          <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={15}>
              <Marker position={location} />
            </GoogleMap>
          </LoadScript>
        ) : (
          <p>Loading location...</p>
        )}
      </div>
    </div>
  );
};

export default Map;
