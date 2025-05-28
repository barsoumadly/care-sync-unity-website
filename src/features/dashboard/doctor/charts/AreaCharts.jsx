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
    name: "Nov",

    pv: 38,
  },
  {
    name: "Dec",

    pv: 43,
  },
  {
    name: "Jan",
    pv: 24,
  },
  {
    name: "Feb",

    pv: 13,
  },
  {
    name: "Mar",

    pv: 68,
  },
  {
    name: "Apr",

    pv: 28,
  },
  {
    name: "May",

    pv: 48,
  },
];

export default function AreaCharts() {
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
            right: 30,
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
            unit="Ke£"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            stroke={colors.name.stroke}
            fill={colors.name.fill}
            strokeWidth={2}
            name="Total profits"
            unit="Ke£"
            type="monotone"
            dataKey="pv"
          />{" "}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
