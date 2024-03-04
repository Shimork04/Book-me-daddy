import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";

export const Cuisines = () => {
    const catagoryArray = ["Italian", "Mexican", "Chinese", "Indian", "Mexican", "Chinese", "Indian"];
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className=" text-l lg:text-xl">Cuisines</span>
        <Button variant="ghost" className="m-0">See all</Button>
      </div>
      <div>
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full xsm:max-w-sm max-w-xs"
    >
        <CarouselPrevious className="hidden lg:flex" />
      <CarouselContent className="px-2">
        {catagoryArray.map((data,index)=> (
          <CarouselItem key={index} className=" basis-1/2 xsm:besis-1/3 md:basis-1/4 lg:basis-1/4 pl-2">
            <div className="p-1 ">
              <Card className="rounded-3xl bg-[url('/food.jpg')] object-fill">
                <CardContent className="flex items-center justify-center p-3 bg-black bg-opacity-60  rounded-3xl">
                  <span className="text-l font-semibold text-white">{data}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
    </div>
    </div>
  )
}
