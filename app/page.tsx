import Image from "next/image";
import { Button } from "@/components/ui/button";
import DailyActivityPieChart from "@/components/daily-activity-chart";

export default function Home() {
  return (
  <main className="flex flex-col gap-4">
   <div className="font-[family-name:var(--font-geist-mono)]">
    hello, world

    <Button>Click here</Button>
   </div>
   <div>
    <DailyActivityPieChart/>

   </div>
  </main>
  );
}
