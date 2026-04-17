import { MapContainer, TileLayer, Polyline, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapView({ shipment }) {
  if (!shipment) {
    return <p style={{ color: "white" }}>No shipment yet</p>;
  }

  const cityCoords = {
    Bangalore: [12.9716, 77.5946],
    Delhi: [28.7041, 77.1025],
    Mumbai: [19.0760, 72.8777],
    Mysore: [12.2958, 76.6394],
    Hyderabad: [17.3850, 78.4867],
    Chennai: [13.0827, 80.2707],
  };

  const [source, destination] = shipment.code.split(" → ");

  const positions = [
    cityCoords[source] || [20.5937, 78.9629],
    cityCoords[destination] || [20.5937, 78.9629],
  ];

  const color =
    shipment.risk === "High"
      ? "red"
      : shipment.risk === "Medium"
      ? "orange"
      : "green";

  return (
    <MapContainer
      center={positions[0]}
      zoom={5}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Route line */}
      <Polyline positions={positions} color={color} />

      {/* Markers */}
      <Marker position={positions[0]} />
      <Marker position={positions[1]} />
    </MapContainer>
  );
}

export default MapView;