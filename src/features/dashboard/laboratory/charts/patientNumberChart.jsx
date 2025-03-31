import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  ResponsiveContainer,
  Area,
} from "recharts";

const data = [
  {
    name: "Jan",
    pv: 46,
  },
  {
    name: "Feb",
    pv: 25,
  },
  {
    name: "Mar",
    pv: 39,
  },
  {
    name: "Apr",
    pv: 70,
  },
  {
    name: "May",
    pv: 54,
  },
  {
    name: "Jun",
    pv: 19,
  },
  {
    name: "Jul",
    pv: 63,
  },
];

export default function PatientNumberChart() {
  const colors = {
    name: { stroke: "#008cff", fill: "#32a3ff" },
    pv: { stroke: "#16a34a", fill: "#dcfce7" },
    text: "#374151",
    background: "#fff",
  };
  return (
    <div>
      <ResponsiveContainer height={300} width="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="4" />
          <XAxis
            dataKey="name"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            stroke={colors.name.stroke}
            fill={colors.name.fill}
            strokeWidth={2}
            name="Patinents"
            // unit="mm/Hg"
            type="monotone"
            dataKey="pv"
          />{" "}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
