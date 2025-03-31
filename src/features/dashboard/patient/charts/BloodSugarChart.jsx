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
    pv: 150,
  },
  {
    name: "Feb",
    pv: 95,
  },
  {
    name: "Mar",
    pv: 110,
  },
  {
    name: "Apr",
    pv: 70,
  },
  {
    name: "May",
    pv: 185,
  },
  {
    name: "Jun",
    pv: 140,
  },
  {
    name: "Jul",
    pv: 85,
  },
];

export default function BloodSugarChart() {
  const colors = {
    name: { stroke: "#ff3667", fill: "#ff5e85" },
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
            name="Temperature"
            unit="°C"
            type="monotone"
            dataKey="pv"
          />{" "}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
