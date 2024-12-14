import { Button } from "./ui/button";

export default function HourLayout(){
  return (
    <>

    {/* make more such divs to finsih the schedule clock...use angle of 15 degrees to create 12 lines */}
    <div className="flex relative w-fit h-fit justify-center items-center">

    {/* dial for 00 to 12 */}
    <div className="flex flex-col absolute w-fit justify-center items-center">
    <Button variant={"ghost"} className="text-xl font-bold rounded-2xl"> 24 | 00 </Button>
    <div className="w-1 h-24 bg-black"></div>
    <div className="w-1 h-80"></div>
    <div className="w-1 h-24 bg-black"></div>
    <Button variant={"ghost"} className="text-xl font-bold rounded-2xl"> 12 </Button>
    </div>

    {/* dial for 06 to 18 */}
    <div className="flex flex-col absolute w-fit justify-center items-center rotate-90">
    <Button variant={"ghost"} className="text-xl font-bold rounded-2xl -rotate-90"> 06 </Button>
    <div className="w-1 h-24 bg-black"></div>
    <div className="w-1 h-80"></div>
    <div className="w-1 h-24 bg-black"></div>
    <Button variant={"ghost"} className="text-xl font-bold rounded-2xl -rotate-90"> 18 </Button>
    </div>

    {/* dial for 01 to 13 */}
    <div className="flex flex-col absolute w-fit justify-center items-center rotate-[15deg]">
    <Button variant={"ghost"} className="text-sm rounded-2xl"> 01 </Button>
    <div className="w-1 h-16 bg-black/40"></div>
    <div className="w-1 h-80"></div>
    <div className="w-1 h-16 bg-black/40"></div>
    <Button variant={"ghost"} className="text-sm  rounded-2xl"> 13 </Button>
    </div>

    {/* dial for 02 to 14 */}
    <div className="flex flex-col absolute w-fit justify-center items-center rotate-[30deg]">
    <Button variant={"ghost"} className="text-sm rounded-2xl"> 02 </Button>
    <div className="w-1 h-16 bg-black/40"></div>
    <div className="w-1 h-80"></div>
    <div className="w-1 h-16 bg-black/40"></div>
    <Button variant={"ghost"} className="text-sm  rounded-2xl"> 14 </Button>
    </div>

    {/* dial for 03 to 15 */}
    <div className="flex flex-col absolute w-fit justify-center items-center rotate-[45deg]">
    <Button variant={"ghost"} className="text-sm rounded-2xl"> 03 </Button>
    <div className="w-1 h-16 bg-black/40"></div>
    <div className="w-1 h-80"></div>
    <div className="w-1 h-16 bg-black/40"></div>
    <Button variant={"ghost"} className="text-sm  rounded-2xl"> 15 </Button>
    </div>

    {/* dial for 04 to 16 */}
    <div className="flex flex-col absolute w-fit justify-center items-center rotate-[60deg]">
    <Button variant={"ghost"} className="text-sm rounded-2xl"> 04 </Button>
    <div className="w-1 h-16 bg-black/40"></div>
    <div className="w-1 h-80"></div>
    <div className="w-1 h-16 bg-black/40"></div>
    <Button variant={"ghost"} className="text-sm  rounded-2xl"> 16 </Button>
    </div>

    {/* dial for 05 to 17 */}
    <div className="flex flex-col absolute w-fit justify-center items-center rotate-[75deg]">
    <Button variant={"ghost"} className="text-sm rounded-2xl"> 05 </Button>
    <div className="w-1 h-16 bg-black/40"></div>
    <div className="w-1 h-80"></div>
    <div className="w-1 h-16 bg-black/40"></div>
    <Button variant={"ghost"} className="text-sm  rounded-2xl"> 17 </Button>
    </div>

    {/* Center Dot */}
    <div className="bg-black rounded-full w-1 h-1 absolute"></div>
    
    {/* dial for 11 to 23 */}
    <div className="flex flex-col absolute w-fit justify-center items-center -rotate-[15deg]">
    <Button variant={"ghost"} className="text-sm rounded-2xl"> 23 </Button>
    <div className="w-1 h-16 bg-black/40"></div>
    <div className="w-1 h-80"></div>
    <div className="w-1 h-16 bg-black/40"></div>
    <Button variant={"ghost"} className="text-sm  rounded-2xl"> 11 </Button>
    </div>

    {/* dial for 10 to 22 */}
    <div className="flex flex-col absolute w-fit justify-center items-center -rotate-[30deg]">
    <Button variant={"ghost"} className="text-sm rounded-2xl"> 22 </Button>
    <div className="w-1 h-16 bg-black/40"></div>
    <div className="w-1 h-80"></div>
    <div className="w-1 h-16 bg-black/40"></div>
    <Button variant={"ghost"} className="text-sm  rounded-2xl"> 10 </Button>
    </div>

    {/* dial for 09 to 21 */}
    <div className="flex flex-col absolute w-fit justify-center items-center -rotate-[45deg]">
    <Button variant={"ghost"} className="text-sm rounded-2xl"> 21 </Button>
    <div className="w-1 h-16 bg-black/40"></div>
    <div className="w-1 h-80"></div>
    <div className="w-1 h-16 bg-black/40"></div>
    <Button variant={"ghost"} className="text-sm  rounded-2xl"> 09 </Button>
    </div>

    {/* dial for 08 to 20 */}
    <div className="flex flex-col absolute w-fit justify-center items-center -rotate-[60deg]">
    <Button variant={"ghost"} className="text-sm rounded-2xl"> 20 </Button>
    <div className="w-1 h-16 bg-black/40"></div>
    <div className="w-1 h-80"></div>
    <div className="w-1 h-16 bg-black/40"></div>
    <Button variant={"ghost"} className="text-sm  rounded-2xl"> 08 </Button>
    </div>

    {/* dial for 07 to 19 */}
    <div className="flex flex-col absolute w-fit justify-center items-center -rotate-[75deg]">
    <Button variant={"ghost"} className="text-sm rounded-2xl"> 19 </Button>
    <div className="w-1 h-16 bg-black/40"></div>
    <div className="w-1 h-80"></div>
    <div className="w-1 h-16 bg-black/40"></div>
    <Button variant={"ghost"} className="text-sm  rounded-2xl"> 07 </Button>
    </div>

    </div>
    </>
  )
}