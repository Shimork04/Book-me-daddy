"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Minus, MinusIcon, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Time } from "./time";

interface GuestProps {
  onContinue: () => void;
}
export const Guests = ({ onContinue }: GuestProps) => {
  const [time, setTime] = useState("today");
  const [itemCount, setItemCount] = useState<number>(1);
  const [cartItemCount, setCartItemCount] = useState<number>(0);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const addCount = () => {
    setItemCount((prevCount) => prevCount + 1);
  };

  const minusCount = () => {
    if (itemCount !== 1) {
      setItemCount((prevCount) => prevCount - 1);
    }
  };
  const [date, setDate] = useState<Date>();
  const today = new Date().getDate();
  const monthName = month[new Date().getMonth()];

  const tomorrow = today + 1;

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-y-4 lg:w-[70%] bg-gray-200 p-5 rounded-md">
      <div>
        <span className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">
          The Italian Affair
        </span>
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between ">
        <div className=" xs:w-full w-[33%] flex flex-col p-1">
          <div>
            <span className=" text-lg font-semibold text-black">Guests</span>
          </div>
          <div className=" flex justify-between items-center font-bold py-4 lg:py-1 px-4 text-white">
            <p
              onClick={minusCount}
              className="hover:scale-105 duration-200 cursor-pointer rounded-full bg-blue-600 text-center py-2 px-3"
            >
              <MinusIcon size={20} />
            </p>
            <p className="text-lg text-gray-900 border border-black rounded-2xl py-2 px-12">
              {itemCount}
            </p>
            <p
              onClick={addCount}
              className="hover:scale-105 duration-200 cursor-pointer rounded-full bg-blue-600 py-2 px-3 text-center"
            >
              <Plus size={20} />
            </p>
          </div>
        </div>

        <div className="flex xs:w-full  flex-col p-1">
          <div>
            <span className=" text-lg font-semibold text-black">Date</span>
          </div>
          <div className="flex py-4 lg:py-1 px-4">
            <ToggleGroup
              type="single"
              className="flex md:gap-x-3"
              onValueChange={(value) => setTime(value)}
              defaultValue="today"
            >
              <ToggleGroupItem
                value="today"
                aria-label="Today"
                variant="outline"
                className="xs:text-xs"
              >
                <div className="flex flex-col px-3 w-max">
                  <span className="text-xs">Today</span>
                  <span className="text-xs">
                    {today} {monthName}
                  </span>
                </div>
              </ToggleGroupItem>
              <ToggleGroupItem
                value="tommorow"
                aria-label="Tommorow"
                variant="outline"
                className="xs:text-xs"
              >
                <div className="flex flex-col px-3 ">
                  <span className="text-xs">Tomorrow</span>
                  <span className="text-xs">
                    {tomorrow} {monthName}
                  </span>
                </div>
              </ToggleGroupItem>
              <Popover>
                <PopoverTrigger asChild>
                  <ToggleGroupItem
                    value="Pick date"
                    aria-label="Pick date"
                    variant="outline"
                    className="text-xs w-full"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PP") : <span>Pick a date</span>}
                  </ToggleGroupItem>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </ToggleGroup>
          </div>
        </div>
      </div>
      <div>
        <Time key={time} time={time} onContinue={onContinue} />
      </div>
    </div>
    </div>
  );
};
