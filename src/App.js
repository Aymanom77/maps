import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './Map.css'; // Fichier CSS pour les styles

function MyMapComponent() {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: -34.397,
    lng: 150.644,
  };

  return (
    <div className="map-container">
      <h1 className="title">Welcome to Our Gym!</h1>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={10}
        />
      </LoadScript>
      <footer className="footer">
        <p>Contact us at: example@example.com</p>
      </footer>
    </div>
  );
}

export default MyMapComponent;
