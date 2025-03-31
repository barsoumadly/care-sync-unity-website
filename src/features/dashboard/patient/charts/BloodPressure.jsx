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
    pv: (115 / 75).toFixed(2),
  },
  {
    name: "Feb",
    pv: (125 / 78).toFixed(2),
  },
  {
    name: "Mar",
    pv: (132 / 82).toFixed(2),
  },
  {
    name: "Apr",
    pv: (140 / 90).toFixed(2),
  },
  {
    name: "May",
    pv: (150 / 95).toFixed(2),
  },
  {
    name: "Jun",
    pv: (185 / 120).toFixed(2),
  },
  {
    name: "Jul",
    pv: (90 / 60).toFixed(2),
  },
];

export default function BloodPressureChart() {
  const colors = {
    name: { stroke: "#14b8a6", fill: "#42c6b7" },
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
            name="Blood Pressure"
            unit=" mm/Hg"
            type="monotone"
            dataKey="pv"
          />{" "}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
