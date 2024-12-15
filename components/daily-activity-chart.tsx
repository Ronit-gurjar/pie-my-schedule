"use client";

import { useMemo, useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// Define the props type
interface ActivityPieChartProps {
  data: { activity: string; duration: number }[];
}

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a4de6c", "#d0ed57", "#d0edff"]; // Custom activity colors
const GRAY_COLOR = "#E5E7EB"; // Tailwind gray-300 equivalent

const TOTAL_HOURS = 24;

export default function DailyActivityPieChart({ data }: ActivityPieChartProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure the component only renders on the client
    setIsMounted(true);
  }, []);

  // Transform data into chart format using useMemo
  const chartData = useMemo(() => {
    // Calculate remaining unassigned hours
    const assignedHours = data.reduce((sum, entry) => sum + entry.duration, 0);
    const remainingHours = TOTAL_HOURS - assignedHours;

    // Map data to recharts format
    const transformedData = data.map((entry) => ({
      name: entry.activity || "Unlabeled",
      value: entry.duration,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    // Add default "Unassigned" slice if remaining time exists
    if (remainingHours > 0) {
      transformedData.push({
        name: "Unassigned",
        value: remainingHours,
        color: GRAY_COLOR,
      });
    }

    return transformedData;
  }, [data]);

  // Avoid rendering on the server
  if (!isMounted) return null;

  return (
    <div className="absolute">
      <PieChart width={600} height={600}>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={200}
          startAngle={90} // Clockwise start
          endAngle={-270} // Total 360 degrees in clockwise direction
          dataKey="value"
          label={(entry) => `${entry.name} (${entry.value}h)`}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        {/* <Legend /> */}
      </PieChart>
    </div>
  );
}
