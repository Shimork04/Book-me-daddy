import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock2Icon, MapPin } from "lucide-react";

interface ReviewProps{
    onContinue:()=>void
  }

export const Review = ({onContinue}:ReviewProps) => {
  return (
    <div className="flex justify-center">
    <div className="flex flex-col gap-y-4 w-[90%] sm:w-[500px] bg-gray-200 rounded-md p-4">
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-2">
            <div className="flex gap-x-3 items-center">
              <div>
                <img
                  className="object-fill rounded-lg"
                  src="/restaurant.jpg"
                  alt="rest"
                />
              </div>
              <div>
                <div className="gap-y-3 flex flex-col justify-start">
                  <span className="m-0 p-0 font-serif overflow-ellipsis text-xl font-semibold">
                    The Italian Affair
                  </span>
                  <div className="flex gap-x-2">
                    <Button variant="outline" size="sm">
                      Italian Cuisine
                    </Button>
                    <Button variant="outline" size="sm">
                      10% OFF
                    </Button>
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
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-between">
            <span>Name</span>
            <span>Jay Lapani</span>
        </div>
        <div className="flex justify-between">
            <span>Email</span>
            <span>jaylapani45@gmail.com</span>
        </div>
        <div className="flex justify-between">
            <span>Phone Number</span>
            <span>+91 9558108322</span>
        </div>
        <div className="flex justify-between">
            <span>Booking Date</span>
            <span>Jan 04, 2024 | 10:00 AM</span>
        </div>
        <div className="flex justify-between">
            <span>Occasion</span>
            <span>Birthday</span>
        </div>
        <hr color="black" />
        <div className="flex justify-between">
            <span>Booking for</span>
            <span>Jan 04, 2024 | 17:00 PM</span>
        </div>
        <div className="flex justify-between">
            <span>Number of Guests</span>
            <span>04</span>
        </div>
        <div className="flex justify-between">
            <span>Table Number</span>
            <span>T-02</span>
        </div>
        <div className="flex justify-between">
            <span>Floor</span>
            <span>1st Floor</span>
        </div>
        <Button className="m-3 bg-blue-700" onClick={onContinue}>Confirm Booking</Button>
      </div>
    </div>
  );
};
