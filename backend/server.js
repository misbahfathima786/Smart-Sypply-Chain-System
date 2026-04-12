const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
app.use(cors());
app.use(express.json());

// DB
const db = new sqlite3.Database("./database.db");

// Create table
db.run(`
CREATE TABLE IF NOT EXISTS shipments (
  id INTEGER PRIMARY KEY,
  code TEXT,
  status TEXT,
  risk TEXT,
  weather TEXT,
  traffic TEXT,
  reason TEXT
)
`);

// GET
app.get("/api/shipments", (req, res) => {
    db.all("SELECT * FROM shipments", [], (err, rows) => {
        res.json(rows);
    });
});

// POST
app.post("/api/shipments", (req, res) => {
    const { code, status, risk, weather, traffic, reason } = req.body;

    db.run(
        "INSERT INTO shipments (code, status, risk, weather, traffic, reason) VALUES (?, ?, ?, ?, ?, ?)", [code, status, risk, weather, traffic, reason],
        function(err) {
            res.json({ id: this.lastID });
        }
    );
});

app.listen(5000, () => console.log("Server running on port 5000"));