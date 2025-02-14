"use client"


import { Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { profitGrowth: "APIs", percentage: 3600, fill: "var(--color-chrome)" },
  { profitGrowth: "Webhooks", percentage: 3800, fill: "var(--color-safari)" },
  { profitGrowth: "Calls", percentage: 2500, fill: "var(--color-firefox)" },
]

const chartConfig = {
  chrome: {
    label: "APIs",
    color: "#FD2254",
  },
  safari: {
    label: "Webhooks",
    color: "#00B7FE",
  },
  firefox: {
    label: "Calls",
    color: "#D0D2DA",
  },
} satisfies ChartConfig

export default function PieChartUi() {
  return (
    <Card className="flex flex-col w-[15rem]">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="percentage"
              nameKey="profitGrowth"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
