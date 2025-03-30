import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
const data = [
  { name: "Neurology", many: 40 },
  { name: "Cardiology", many: 60 },
  { name: "Dermatology", many: 16 },
  { name: "Oncology", many: 33 },
  { name: "Gynecology", many: 55 },
  { name: "Orthopedics", many: 36 },
  { name: "Ophthalmology", many: 70 },
];
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#F6F0AF",
  "#F38C79",
  "#FFC1B4",
  "#034C53",
  "#007074",
];

function PieCH() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart
        width={400}
        height={400}
        margin={{ top: 5, bottom: 5, left: -40 }}
      >
        {/* <Pie data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="many" label> */}
        <Pie data={data} dataKey="many" label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieCH;
