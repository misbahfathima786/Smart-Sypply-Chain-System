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

  return (
    <div className="container">
      <h1>🚀 SmartChain Dashboard</h1>

      {/* Charts */}
      <Charts shipments={shipments} />

      {/* Map */}
      <MapView shipments={shipments} />

      {/* Shipment List */}
      <h2>Shipments</h2>
      {shipments.map((s) => (
        <div key={s.id} className="card">
          <h3>{s.code}</h3>
          <p>Status: {s.status}</p>
          <p>Risk: {s.risk}</p>
          <p>Weather: {s.weather}</p>
          <p>Traffic: {s.traffic}</p>
          <p>Reason: {s.reason}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;