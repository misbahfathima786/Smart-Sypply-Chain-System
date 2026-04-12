import { useEffect, useState } from "react";

function ViewShipments() {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/shipments")
      .then(res => res.json())
      .then(data => setShipments(data));
  }, []);

  return (
    <div className="container">
      <h2>All Shipments</h2>

      {shipments.map((s) => (
        <div key={s.id} className="card">
          <h3>{s.code}</h3>
          <p>Status: {s.status}</p>
          <p>Risk: {s.risk}</p>
        </div>
      ))}
    </div>
  );
}

export default ViewShipments;