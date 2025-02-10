import "leaflet/dist/leaflet.css";
import { GiPositionMarker } from "react-icons/gi";

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

function Map({ name, markerPosition = [30.033333, 31.233334] }) {
  return (
    <>
      <MapContainer
        className="leaflet-container"
        center={markerPosition}
        zoom={20}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        <div className="google-maps-link">
          <a
            aria-label="View larger map"
            target="_blank"
            href={`http://www.google.com/maps/place/${markerPosition.join(
              ","
            )}`}
          >
            View larger map
          </a>{" "}
          <span>
            <GiPositionMarker />
          </span>
        </div>
        <Marker position={markerPosition}>
          <Popup>
            <span>{name}</span>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Map;
