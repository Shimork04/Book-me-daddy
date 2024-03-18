"use client"
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";

interface TimeProps{
    time:String
    onContinue:()=>void
}
 
export const Time = ({ time,onContinue }:TimeProps) => {
  const handleClick=()=>{
    onContinue();
}
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [isToggle,setToggle] = useState(String)
  const [Table,setTable] = useState(false)


  useEffect(() => {
    const generateAvailableTimes = () => {
      if (time == "today") {
        const todayOptions = [];
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        const currentMinute = currentTime.getMinutes();
        for (let hour = currentHour; hour <= 23; hour++) {
          for (let minute = 0; minute < 60; minute += 30) {
            if (hour === currentHour && minute <= currentMinute) {
              continue;
            }
            const formattedHour = String(hour).padStart(2, "0");
            const formattedMinute = String(minute).padStart(2, "0");
            todayOptions.push(`${formattedHour}:${formattedMinute}`);
          }
        }
        return todayOptions;
      } else {
        const tomorrowOptions = [];
        for (let hour = 11; hour <= 23; hour++) {
          for (let minute = 0; minute < 60; minute += 30) {
            const formattedHour = String(hour).padStart(2, "0");
            const formattedMinute = String(minute).padStart(2, "0");
            tomorrowOptions.push(`${formattedHour}:${formattedMinute}`);
          }
        }
        return tomorrowOptions;
      } 
    };

    setAvailableTimes(generateAvailableTimes());
  }, [time]);

  return (
    <div className="flex xs:w-full w-3/5 flex-col p-1">
      <div>
        <span className="text-lg font-semibold text-black">Time</span>
      </div>
      <div className=" py-4 lg:py-1 px-4 ">
        <ToggleGroup type="single" className="flex md:gap-x-3 flex-wrap sm:justify-start"  onValueChange={(value)=>setToggle(value)}>
          {availableTimes.map((timeOption, index) => (
            <ToggleGroupItem
              key={index}
              value={timeOption}
              aria-label={timeOption}
              variant="outline"
              className="xs:text-xs"
            >
              <div className="flex flex-col px-3 w-16 items-center">
                <span className="text-xs">{timeOption}</span>
              </div>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      
      <Button className={cn("m-3 bg-blue-400",isToggle && "m-3 bg-blue-700")} onClick={handleClick}>Continue</Button>
    </div>
  );
};
