import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

function Map({ name, markerPosition = [30.033333, 31.233334] }) {
  return (
    <MapContainer
      className="leaflet-container"
      center={markerPosition}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />

      <Marker position={markerPosition}>
        <Popup>
          <span>{name}</span>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
