import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { Search, SquareDot } from "lucide-react";

export const Gellery = () => {
    const GelleryArray = [
        "/restaurant.jpg",
        "/restaurant.jpg",
        "/restaurant.jpg",
        "/restaurant.jpg",
        "/restaurant.jpg",
      ];
    
  return (
    <div className="flex flex-col gap-y-4 m-4">
      <div className=" flex flex-wrap p-1 m-2 justify-center">
        {GelleryArray.map((imageUrl,index) => (
          <Card className="m-2" key={index}>
            <CardContent className="flex items-center justify-center p-2">
              <img
                className=" max-h-[100px] xs:max-h-full"
                src={imageUrl}
                alt="image"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
