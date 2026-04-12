import { useState } from "react";

function AddShipment() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = async () => {
    const weatherOptions = ["Sunny", "Rainy", "Storm"];
    const trafficOptions = ["Low", "Medium", "High"];

    const weather = weatherOptions[Math.floor(Math.random() * 3)];
    const traffic = trafficOptions[Math.floor(Math.random() * 3)];

    let risk = "Low";
    let status = "On Time";
    let reason = "Smooth conditions";

    if (weather === "Storm") {
      risk = "High";
      status = "Delayed";
      reason = "Severe storm";
    } else if (traffic === "High") {
      risk = "High";
      status = "Delayed";
      reason = "Heavy traffic";
    } else if (weather === "Rainy") {
      risk = "Medium";
      status = "Slight Delay";
      reason = "Rain";
    }

    const code = `${source} → ${destination}`;

    await fetch("http://localhost:5000/api/shipments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, status, risk, weather, traffic, reason }),
    });

    alert("Shipment Added 🚀");
  };

  return (
    <div className="container">
      <h2>Add Shipment</h2>

      <input placeholder="Source" onChange={(e) => setSource(e.target.value)} />
      <input placeholder="Destination" onChange={(e) => setDestination(e.target.value)} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default AddShipment;