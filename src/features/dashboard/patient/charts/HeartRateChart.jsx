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
    pv: 55,
  },
  {
    name: "Feb",
    pv: 65,
  },
  {
    name: "Mar",
    pv: 60,
  },
  {
    name: "Apr",
    pv: 75,
  },
  {
    name: "May",
    pv: 110,
  },
  {
    name: "Jun",
    pv: 95,
  },
  {
    name: "Jul",
    pv: 85,
  },
];

export default function HeartRateChart() {
  const colors = {
    name: { stroke: "#4f46e5", fill: "#2e37a4" },
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
            right: 7,
            left: -19,
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
            name="Heart Rate"
            unit="bpm"
            type="monotone"
            dataKey="pv"
          />{" "}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
