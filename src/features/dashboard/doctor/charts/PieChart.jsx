import {
  Sector,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function PieCharts({ data, label }) {
  return (
    <div>
      {" "}
      <h4 className="card-title d-inline-block">{label} </h4>{" "}
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            nameKey={`${
              label === "Clinics income for a month"
                ? "durationIncome"
                : "duration"
            }`}
            dataKey={`${
              label === "Clinics income for a month" ? "valueIncome" : "value"
            }`}
            innerRadius={85}
            outerRadius={110}
            cx="40%"
            cy="50%"
            paddingAngle={3}
          >
            {data?.map((entry) => (
              <Cell
                fill={entry.color}
                stroke={entry.color}
                key={entry.duration}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            align="center"
            width="100%"
            layout="horizontal"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
