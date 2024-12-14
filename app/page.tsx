import Image from "next/image";
import { Button } from "@/components/ui/button";
import Schedular from "@/components/schedular";
import HourSchedularC from "@/components/hourSchedular";
import HourLayout from "@/components/24hr-schedularC";

export default function Home() {
  return (
  <main className="flex flex-col gap-4">
   <div className="font-[family-name:var(--font-geist-mono)]">
    hello, world

    <Button>Click here</Button>
   </div>
   
    <Schedular/>
    {/* <HourLayout/> */}
  </main>
  );
}
