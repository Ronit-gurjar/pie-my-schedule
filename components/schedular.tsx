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
    return (
        <Card className="flex flex-col items-center justify-normal gap-60 h-fit m-4">
            <CardHeader>
                <CardTitle>
                <div className="flex flex-row text-3xl font-bold gap-96">
                    <span>PM</span>
                    <span>AM</span>
                </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
                <DailyActivityPieChart/>
                <HourLayout/>
            </CardContent>
        </Card>
    )
};