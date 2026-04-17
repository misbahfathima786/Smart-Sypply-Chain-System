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
  const riskCount = { Low: 0, Medium: 0, High: 0 };

  shipments.forEach((s) => {
    riskCount[s.risk]++;
  });

  const pieData = {
    labels: ["Low", "Medium", "High"],
    datasets: [
      {
        data: [riskCount.Low, riskCount.Medium, riskCount.High],
        backgroundColor: ["green", "orange", "red"],
      },
    ],
  };

  const barData = {
    labels: shipments.map((s) => s.code),
    datasets: [
      {
        label: "Risk",
        data: shipments.map((s) =>
          s.risk === "High" ? 3 : s.risk === "Medium" ? 2 : 1
        ),
        backgroundColor: "blue",
      },
    ],
  };
const options = {
  plugins: {
    legend: {
      labels: {
        color: "white",   // ✅ legend text (Risk)
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "white",   // ✅ bottom labels (city names)
      },
      grid: {
        color: "rgba(255,255,255,0.2)", // optional grid light
      },
    },
    y: {
      ticks: {
        color: "white",   // ✅ numbers on left
      },
      grid: {
        color: "rgba(255,255,255,0.2)",
      },
    },
  },
};
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