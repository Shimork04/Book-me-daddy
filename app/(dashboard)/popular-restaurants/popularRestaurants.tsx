import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Toggle } from "@/components/ui/toggle";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export const PopularRestaurants = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  // Array containing paths/URLs of images
  const RestaurantsArray = [
    "/restaurant.jpg",
    "/restaurant.jpg",
    "/restaurant.jpg",
    "/restaurant.jpg",
    "/restaurant.jpg",
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className=" text-xl lg:text-2xl font-semibold">
          Popular Restaurants
        </span>
        <Button variant="ghost" className="m-0">
          See all
        </Button>
      </div>
      <div className="flex gap-x-2">
      <div>
        <Toggle aria-label="Toggle" variant="outline">Nearest</Toggle>
      </div>
      <div>
        <Toggle aria-label="Toggle" variant="outline">Great Offers</Toggle>
      </div>
      <div>
        <Toggle aria-label="Toggle" variant="outline">Ratings</Toggle>
      </div>
      </div>
      <div className=" mx-11">
        <Carousel
          plugins={[plugin.current]}
          className="max-w-md xsm:max-w-lg"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselPrevious />
          <CarouselContent>
            {RestaurantsArray.map((imageUrl, index) => (
              <CarouselItem
                key={index}
                className="pl-1 sm:basis-1/3 md:basis-1/3 lg:basis-1/3 xl:basis-1/4 xs:basis-1/1 xsm:basis-1/2"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-2">
                      <img
                        className=" object-fill"
                        src={imageUrl}
                        alt={`Offer ${index + 1}`}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};
