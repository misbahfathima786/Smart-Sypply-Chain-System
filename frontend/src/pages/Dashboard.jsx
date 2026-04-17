import { useEffect, useState } from "react";
import Charts from "../components/Charts";
import MapView from "../components/MapView";

function Dashboard() {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/shipments")
      .then(res => res.json())
      .then(data => setShipments(data));
  }, []);

  // ✅ latest shipment
  const latest = shipments.length > 0 ? shipments[shipments.length - 1] : null;

  return (
    <div className="container">
      <h1>🚀 SmartChain Dashboard</h1>

      {/* Charts */}
      <Charts shipments={shipments} />

      {/* Map */}
      <MapView shipment={latest} />

      {/* Shipment Display */}
      <h2>Latest Shipment</h2>

      {latest ? (
        <div className="card">
          <h3>{latest.code}</h3>

          <p>
            Weather:{" "}
            {latest.weather === "Rain"
              ? "🌧️ Rain"
              : latest.weather === "Clouds"
              ? "☁️ Clouds"
              : latest.weather === "Thunderstorm"
              ? "⛈️ Thunderstorm"
              : "☀️ Clear"}
          </p>

          <p>
            Traffic:{" "}
            {latest.traffic === "High"
              ? "🚗 High"
              : latest.traffic === "Medium"
              ? "🚕 Medium"
              : "🟢 Low"}
          </p>

          <p>
            Risk:{" "}
            {latest.risk === "High"
              ? "🔴 High"
              : latest.risk === "Medium"
              ? "🟠 Medium"
              : "🟢 Low"}
          </p>

          <p>
            Status:{" "}
            {latest.status === "Delayed"
              ? "⏱️ Delayed"
              : latest.status === "Slight Delay"
              ? "⚠️ Slight Delay"
              : "✅ On Time"}
          </p>

          <p style={{ color: "#ffb347", fontWeight: "bold" }}>
            {latest.reason}
          </p>
        </div>
      ) : (
        <p>No shipments yet</p>
      )}
    </div>
  );
}

export default Dashboard;