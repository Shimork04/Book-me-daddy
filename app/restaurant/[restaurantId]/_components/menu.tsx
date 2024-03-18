import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { Search, SquareDot } from "lucide-react";

export const Menu = () => {
    const MenuArray = [
        "/restaurant.jpg",
        "/restaurant.jpg",
        "/restaurant.jpg",
        "/restaurant.jpg",
        "/restaurant.jpg",
      ];
    
  return (
    <div className="flex flex-col gap-y-4 m-4">
      <div className="flex justify-between">
        <span className="text-black text-lg">
          Menu<span className=" text-lg text-green-500">(86 Items)</span>
        </span>
        <Button variant="ghost" size="sm">
          View Full Menu
        </Button>
      </div>
      <div className="flex flex-col md:flex-row md:gap-x-4 gap-y-4 md:items-center">
        <div className="flex items-center">
          <Search className="relative transform left-7 h-4 w-4 text-muted-foreground" />
          <Input
            // onChange={} handle changes
            className="w-full max-w-96 pl-9"
            placeholder="Search items"
          />
        </div>
        <div className="flex gap-x-4">
          <div>
            <Toggle
              aria-label="Toggle"
              variant="outline"
              size="sm"
              className="xs:text-xs"
            >
              <SquareDot color="green" />
            </Toggle>
          </div>
          <div>
            <Toggle
              aria-label="Toggle"
              variant="outline"
              size="sm"
              className="xs:text-xs"
            >
              <SquareDot color="red" />
            </Toggle>
          </div>
          <div>
            <Toggle
              aria-label="Toggle"
              variant="outline"
              size="sm"
              className="xs:text-xs"
            >
              Best Seller
            </Toggle>
          </div>
          <div>
            <Toggle
              aria-label="Toggle"
              variant="outline"
              size="sm"
              className="xs:text-xs"
            >
              Top Rated
            </Toggle>
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap p-1 m-2 justify-center">
        {MenuArray.map((imageUrl,index) => (
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
