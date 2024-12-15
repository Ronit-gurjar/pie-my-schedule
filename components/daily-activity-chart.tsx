"use client";

import { useMemo, useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// Define the props type
interface ActivityPieChartProps {
  data: { activity: string; startTime: string; endTime: string }[]; // startTime and endTime in "HH:mm" format
}

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a4de6c", "#d0ed57", "#d0edff"]; // Custom activity colors
const GRAY_COLOR = "#E5E7EB"; // Tailwind gray-300 equivalent

const TOTAL_HOURS = 24;

// Helper function to convert time to minutes
const timeToMinutes = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

// Helper function to calculate the duration (in hours) from startTime to endTime
const calculateDuration = (startTime: string, endTime: string) => {
  const startMinutes = timeToMinutes(startTime);
  const endMinutes = timeToMinutes(endTime);

  // If endTime is before startTime, it means the activity spans across midnight
  if (endMinutes < startMinutes) {
    return (TOTAL_HOURS * 60 - startMinutes + endMinutes) / 60; // Duration in hours
  } else {
    return (endMinutes - startMinutes) / 60; // Duration in hours
  }
};

export default function DailyActivityPieChart({ data }: ActivityPieChartProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure the component only renders on the client
    setIsMounted(true);
  }, []);

  // Transform data into chart format using useMemo
  const chartData = useMemo(() => {
    // Calculate total assigned hours
    const transformedData = data.map((entry) => {
      const duration = calculateDuration(entry.startTime, entry.endTime);
      return {
        name: entry.activity || "Unlabeled",
        value: duration,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      };
    });

    // Calculate the total assigned hours
    const assignedHours = transformedData.reduce((sum, entry) => sum + entry.value, 0);
    const remainingHours = TOTAL_HOURS - assignedHours;

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
          label={(entry) => `${entry.name} (${entry.value.toFixed(1)}h)`} // Display duration in hours
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
