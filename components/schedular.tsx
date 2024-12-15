"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import HourLayout from "./24hr-schedular";
import DailyActivityPieChart from "./daily-activity-chart";

export default function Schedular(){

    const activityData = [
        { activity: "Sleep", startTime: "23:00", endTime: "06:00" },
        { activity: "Work", startTime: "09:00", endTime: "17:00" },
        { activity: "Exercise", startTime: "18:00", endTime: "19:00" },
      ];

    return (
        <Card className="flex flex-col items-center justify-center m-4">
            <CardHeader>
                <CardTitle>
                <div className="flex flex-row text-3xl font-bold gap-96">
                    <span>PM</span>
                    <span>AM</span>
                </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
                <DailyActivityPieChart data={activityData} />
                <HourLayout/>
            </CardContent>
        </Card>
    )
};