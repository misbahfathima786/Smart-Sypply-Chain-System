import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function Charts({ shipments }) {
  // ✅ Safety check
  if (!shipments || shipments.length === 0) {
    return <p style={{ color: "white" }}>No data yet</p>;
  }

  // ✅ Get ONLY latest shipment
  const s = shipments[0];
  const riskCount = { High: 0, Medium: 0, Low: 0 };

  shipments.forEach((s) => {
    if (s.risk === "High") riskCount.High++;
    else if (s.risk === "Medium") riskCount.Medium++;
    else riskCount.Low++;
  });
  // ✅ Pie Data
  const pieData = {
  labels: ["High", "Medium", "Low"],
  datasets: [
    {
      data: [
        riskCount.High,
        riskCount.Medium,
        riskCount.Low,
      ],
      backgroundColor: [
        "#ff4d4f", // 🔴 High
        "#fadb14", // 🟡 Medium
        "#52c41a", // 🟢 Low
      ],
    },
  ],
};

  // ✅ Bar Data
  const barData = {
    labels: [s.code],
    datasets: [
      {
        label: "Risk",
        data: [
          s.risk === "High"
            ? 3
            : s.risk === "Medium"
            ? 2
            : 1,
        ],
        backgroundColor: "blue",
      },
    ],
  };

  // ✅ Chart Options
  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255,255,255,0.2)",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255,255,255,0.2)",
        },
      },
    },
  };

  // ✅ Final UI
  return (
    <div>
      <h2>📊 Analytics</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ width: "300px" }}>
          <Pie data={pieData} options={options} />
        </div>

        <div style={{ width: "400px" }}>
          <Bar data={barData} options={options} />
        </div>
      </div>
    </div>
  );
}

export default Charts;