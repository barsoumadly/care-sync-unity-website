import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", male: 40, female: 24 },
  { name: "Feb", male: 60, female: 30 },
  { name: "Mar", male: 16, female: 66 },
  { name: "Apr", male: 33, female: 22 },
  { name: "May", male: 55, female: 40 },
  { name: "Jun", male: 36, female: 30 },
  { name: "Jul", male: 70, female: 50 },
  { name: "Aug", male: 40, female: 30 },
  { name: "Sep", male: 20, female: 40 },
  { name: "Oct", male: 15, female: 30 },
  { name: "Nov", male: 67, female: 55 },
  { name: "Dec", male: 30, female: 25 },
];

function LineCH() {
  return (
    <ResponsiveContainer
      width="100%"
      height={300}
      >
      <LineChart width={1150} height={300} data={data} 
      margin={{
        top: 5,
        right: 30,
        left: -5,
        bottom: 5,
      }}>
        <Line type="monotone" dataKey="male" stroke="#A1E3F9" strokeWidth={5} />
        <Line
          type="monotone"
          dataKey="female"
          stroke="#FFB8E0"
          strokeWidth={5}
        />
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineCH;
