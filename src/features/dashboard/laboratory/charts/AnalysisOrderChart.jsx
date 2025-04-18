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
    pv: 52,
  },
  {
    name: "Feb",
    pv: 78,
  },
  {
    name: "Mar",
    pv: 38,
  },
  {
    name: "Apr",
    pv: 49,
  },
  {
    name: "May",
    pv: 65,
  },
  {
    name: "Jun",
    pv: 34,
  },
  {
    name: "Jul",
    pv: 27,
  },
];

export default function AnalysisOrderChart() {
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
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            stroke={colors.name.stroke}
            fill={colors.name.fill}
            strokeWidth={2}
            name="Analysis Orders"
            // unit="°C"
            type="monotone"
            dataKey="pv"
          />{" "}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
