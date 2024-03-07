import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

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

export const Ads = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  // Array containing paths/URLs of images
  const imageArray = ["/offer1.jpg", "/offer1.jpg", "/offer1.jpg", "/offer1.jpg", "/offer1.jpg"];

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className=" text-xl lg:text-2xl font-semibold">Special Offers</span>
        <Button variant="ghost" className="m-0 font-semibold text-blue-700">See all</Button>
      </div>
      <div className="m-2">
      <Carousel
        plugins={[plugin.current]}
        className="max-w-md xsm:max-w-lg"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselContent>
          {imageArray.map((imageUrl, index) => (
            <CarouselItem key={index} className="pl-4 sm:basis-1/3 md:basis-1/3 lg:basis-1/3 xl:basis-1/4 xs:basis-1/1 xsm:basis-1/2">
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-2">
                    <img className=" max-h-[160px]" src={imageUrl} alt={`Offer ${index + 1}`}/>
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
  );
};
