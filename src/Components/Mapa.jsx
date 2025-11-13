import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Corrige paths das imagens do marcador para Vite
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

// Coordenadas da Universidade de Rio Verde (Bloco 1)
const universidadeCoords = [-17.7862281, -50.9621162]; // [lat, lng]

export default function Mapa() {
  return (
    <div className="map-card">
      <MapContainer
        center={universidadeCoords}
        zoom={17}
        style={{ height: "100%", width: "100%" }} // <- ajustar para ocupar 100% da altura do pai
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={universidadeCoords}>
          <Popup>
            Universidade de Rio Verde — Bloco 1
            <br />
            {universidadeCoords[0].toFixed(6)},{" "}
            {universidadeCoords[1].toFixed(6)}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
