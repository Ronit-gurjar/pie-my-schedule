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
const DEGREES_PER_HOUR = 360 / TOTAL_HOURS; // 15 degrees per hour

// Helper function to convert time to minutes
const timeToMinutes = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

// Helper function to convert time to minutes
const timeToHours = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours + minutes / 60;
};

const normalizeAngle = (angle: number) => (angle % 360 + 360) % 360;

export default function DailyActivityPieChart({ data }: ActivityPieChartProps) {
  const [isMounted, setIsMounted] = useState(false);
    // Calculate the start angle based on the first activity's startTime
    const chartStartTime = data[0]?.startTime || "00:00"; // Default to "00:00" if no data
    console.log(chartStartTime)
    const firstActivityStartMinutes = timeToMinutes(chartStartTime);
    const chartStartAngle = 90 - (firstActivityStartMinutes / 60) * DEGREES_PER_HOUR; // Adjust based on the first activity's start time
    console.log(chartStartAngle)

  useEffect(() => {
    // Ensure the component only renders on the client
    setIsMounted(true);
  }, []);

  // Transform data into chart format using useMemo
  const chartData = useMemo(() => {
    const slices = [];
    let currentAngle = chartStartAngle
  
    // // Sort activities by start time
    // const sortedActivities = [...data].sort(
    //   (a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime)
    // );
  
    data.forEach((activity, index) => {
      const startTimeHours = timeToHours(activity.startTime);
      let endTimeHours = timeToHours(activity.endTime);
  
       // Adjust for overnight activities (spanning midnight)
      if (endTimeHours < startTimeHours) {
        endTimeHours += TOTAL_HOURS; // Add 24 hours to correctly calculate overnight spans
      }
  
      const durationHours = endTimeHours - startTimeHours;
      const durationDegrees = durationHours * DEGREES_PER_HOUR;
  
      // Calculate the start and end angles for this activity
      let startSliceAngle = chartStartAngle - startTimeHours * DEGREES_PER_HOUR; 
      let endSliceAngle = startSliceAngle - durationDegrees;

      startSliceAngle = normalizeAngle(startSliceAngle);
      endSliceAngle = normalizeAngle(endSliceAngle);

      //debugging
      console.log("Activity:", activity.activity);
      console.log("Start Time Hours:", startTimeHours);
      console.log("End Time Hours:", endTimeHours);
      console.log("Duration Hours:", durationHours);
      console.log("Start Slice Angle:", startSliceAngle);
      console.log("End Slice Angle:", endSliceAngle);
  
      // Add an unassigned slice if there's a gap between the current angle and the start angle
      if (currentAngle !== startSliceAngle) {
        const unassignedDuration = (startSliceAngle - currentAngle +360) % 360;
        console.log("unassigned Duration:-", unassignedDuration);
        if (unassignedDuration > 0) {
          slices.push({
            name: "Unassigned",
            value: unassignedDuration,
            color: GRAY_COLOR,
          });
        }
      }
  
      // Add the activity slice
      slices.push({
        name: activity.activity || "Unlabeled",
        value: durationDegrees,
        color: COLORS[index % COLORS.length],
      });
  
      // Update the current angle to the end of this activity
      currentAngle = endSliceAngle;
    });
  
    // Add a final unassigned slice to close the chart if there's leftover space
    if (currentAngle !== -270) {
      const remainingDuration = (-270 - currentAngle + 360) % 360;
      if (remainingDuration > 0) {
        slices.push({
          name: "Unassigned",
          value: remainingDuration,
          color: GRAY_COLOR,
        });
      }
    }
  
    return slices;
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
          startAngle={chartStartAngle}
          endAngle={chartStartAngle - 360} // Full 360° circle (clockwise)
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
