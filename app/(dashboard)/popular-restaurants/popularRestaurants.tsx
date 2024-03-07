import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Toggle } from "@/components/ui/toggle";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock2Icon, Heart, MapPin } from "lucide-react";
import Link from "next/link";

export const PopularRestaurants = () => {
  var id = Math.floor(Math.random() * 90000) + 10000;
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const RestaurantsArray = [
    "/restaurant.jpg",
    "/restaurant.jpg",
    "/restaurant.jpg",
    "/restaurant.jpg",
    "/restaurant.jpg",
  ];

  return (
    <div className="mt-5 gap-y-2 flex flex-col">
      <div className="flex items-center justify-between">
        <span className=" text-xl lg:text-2xl font-semibold">
          Popular Restaurants
        </span>
        <Button variant="ghost" className="m-0 font-semibold text-blue-700">
          See all
        </Button>
      </div>
      <div className="flex gap-x-2">
        <div>
        <Select>
      <SelectTrigger className="h-9 px-2.5 rounded-3xl">
        <SelectValue placeholder="Cuisines" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Italian</SelectItem>
          <SelectItem value="banana">Maxican</SelectItem>
          <SelectItem value="blueberry">Chinese</SelectItem>
          <SelectItem value="grapes">Indian</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
      <div>
        <Toggle aria-label="Toggle" variant="outline" size="sm" className="xs:text-xs">Nearest</Toggle>
      </div>
      <div>
        <Toggle aria-label="Toggle" variant="outline" size="sm" className="xs:text-xs">Great Offers</Toggle>
      </div>
      <div>
        <Toggle aria-label="Toggle" variant="outline" size="sm" className="xs:text-xs">Ratings</Toggle>
      </div>
      </div>
      <div className="w-full flex justify-center items-center">
      <div className="mx-11 xs:mx-5 xs:max-w-[310px]">
        <Carousel
          plugins={[plugin.current]}
          className="max-w-xl sm:max-w-2xl md:max-w-2xl lg:max-w-2xl"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselContent>
            {RestaurantsArray.map((imageUrl, index) => (
              <Link href={`/restaurant/${id}`} >
              <CarouselItem
                key={index}
                className="sm:basis-1/2 md:basis-1/2 lg:basis-1/2 xl:basis-1/2 xs:basis-[80%] xsm:basis-[80%]"
              >
                <div className="">
                  <Card className="border border-black">
                    <CardContent className="flex flex-col items-center justify-center p-2">
                      <img
                        className="object-fill rounded-lg"
                        src={imageUrl}
                        alt={`Offer ${index + 1}`}
                        
                        />
                    </CardContent>
                    <CardFooter>
                      
                      <div className="gap-y-3 flex flex-col justify-start">
                      <span className="m-0 p-0 font-serif overflow-ellipsis text-xl font-semibold">The Italian Affair</span> 
                      <div className="flex gap-x-2">
                      <Button variant="outline" size="sm">Italian Cuisine</Button>
                      <Button variant="outline" size="sm">10% OFF</Button>
                      </div>
                        <div className="flex gap-x-2">
                          <Clock2Icon />
                          <span>10:00-19:45</span>
                          </div>
                          <div className="flex gap-x-2">
                            <MapPin />
                            <span>Nr.Pitambar Circle</span>
                          </div>
                          </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
              </Link>
            ))}
          </CarouselContent>

          <CarouselNext className="hidden lg:flex" />
        </Carousel>
        </div>
      </div>
    </div>
  );
};
