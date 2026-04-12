import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddShipment from "./pages/AddShipment";
import ViewShipments from "./pages/ViewShipments";

function App() {
  return (
    <Router>
      <nav style={{ background: "#222", padding: "10px" }}>
        <Link to="/" style={{ margin: "10px", color: "white" }}>Dashboard</Link>
        <Link to="/add" style={{ margin: "10px", color: "white" }}>Add</Link>
        <Link to="/view" style={{ margin: "10px", color: "white" }}>View</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddShipment />} />
        <Route path="/view" element={<ViewShipments />} />
      </Routes>
    </Router>
  );
}

export default App;