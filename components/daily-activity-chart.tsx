"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface Activity {
  name: string
  hours: number
  color: string
}

const activities: Activity[] = [
  { name: "Sleep", hours: 7, color: "hsl(var(--muted))" },
  { name: "Work", hours: 8, color: "hsl(var(--chart-1))" },
  { name: "Exercise", hours: 1, color: "hsl(var(--chart-2))" },
  { name: "Research", hours: 2, color: "hsl(var(--chart-3))" },
  { name: "Reading", hours: 2, color: "hsl(var(--chart-4))" },
  { name: "Meals & Breaks", hours: 3, color: "hsl(var(--chart-5))" },
  { name: "Other", hours: 1, color: "hsl(var(--chart-6))" },
]

const RADIAN = Math.PI / 180

interface CustomizedLabelProps {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  percent: number
  index: number
}

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: CustomizedLabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${activities[index].name} ${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export default function DailyActivityPieChart() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Daily Activity Distribution</CardTitle>
        <CardDescription>24-hour breakdown of activities</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={Object.fromEntries(activities.map(activity => [
            activity.name.toLowerCase(),
            { label: activity.name, color: activity.color }
          ]))}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={activities}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
                dataKey="hours"
              >
                {activities.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload as Activity
                    return (
                        <ChartTooltipContent>
                        <div className="flex flex-col gap-1">
                          <p className="font-semibold">{data.name}</p>
                          <p>{`${data.hours} hour${data.hours > 1 ? 's' : ''}`}</p>
                          <p>{`${((data.hours / 24) * 100).toFixed(1)}% of the day`}</p>
                        </div>
                      </ChartTooltipContent>
                    )
                  }
                  return null
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

