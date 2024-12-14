import Image from "next/image";
import { Button } from "@/components/ui/button";
import Schedular from "@/components/schedular";

export default function Home() {
  return (
  <main className="flex flex-col gap-4">
   <div className="font-[family-name:var(--font-geist-mono)]">
    hello, world

    <Button>Click here</Button>
   </div>
   <Schedular/>
  </main>
  );
}
