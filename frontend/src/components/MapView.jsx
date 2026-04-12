import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapView() {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>🗺️ Map</h2>

      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        style={{ height: "300px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[12.9716, 77.5946]}>
          <Popup>Bangalore</Popup>
        </Marker>

        <Marker position={[19.076, 72.8777]}>
          <Popup>Mumbai</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapView;