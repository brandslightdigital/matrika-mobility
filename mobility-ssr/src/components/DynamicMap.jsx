import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const locations = [
  { name: "India", lat: 20.5937, lng: 78.9629 },
  { name: "USA", lat: 37.0902, lng: -95.7129 },
  { name: "Europe", lat: 48.8566, lng: 2.3522 },
  { name: "UK", lat: 51.5074, lng: -0.1278 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "Malaysia", lat: 4.2105, lng: 101.9758 },
];

const DynamicMap = () => {
  return (
    <MapContainer 
      center={[20, 40]} 
      zoom={2} 
      style={{ height: '400px', width: '100%' }}
      className="rounded-2xl"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {locations.map((location, i) => (
        <Marker key={i} position={[location.lat, location.lng]}>
          <Popup>
            <div className="text-center p-2">
              <div className="font-bold text-green-600 text-lg">{location.name}</div>
              <div className="text-sm text-gray-600">Taxi Tribe Available</div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default DynamicMap;