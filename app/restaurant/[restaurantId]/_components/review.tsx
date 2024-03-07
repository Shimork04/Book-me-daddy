import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";
import { Edit3, Search, SquareDot } from "lucide-react";
import { Rating } from "@material-tailwind/react";
import { AddReview } from "./addReview";

export const Review = () => {
  const ReviewArray = [
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
          Reviews<span className=" text-lg text-green-500">(86 Reviews)</span>
        </span>
        <AddReview>
        <Button variant="ghost" size="sm">
          <Edit3 />
          add review
        </Button>
        </AddReview>
      </div>
      <div className="flex flex-col md:flex-row md:gap-x-4 gap-y-4 md:items-center">
        <div className="flex items-center">
          <Search className="absolute transform left-7 h-4 w-4 text-muted-foreground" />
          <Input
            // onChange={} handle changes
            className="w-full max-w-96 pl-9"
            placeholder="Search items"
          />
        </div>
        <div className="flex gap-x-4">
          <div>
            <Select>
              <SelectTrigger className="h-9 px-2.5 rounded-3xl">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Most relevent</SelectItem>
                  <SelectItem value="banana">Highest</SelectItem>
                  <SelectItem value="blueberry">Lowest</SelectItem>
                  <SelectItem value="grapes">Newest</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Toggle
              aria-label="Toggle"
              variant="outline"
              size="sm"
              className="xs:text-xs"
            >
              Verified
            </Toggle>
          </div>
          <div>
            <Toggle
              aria-label="Toggle"
              variant="outline"
              size="sm"
              className="xs:text-xs"
            >
              Latest
            </Toggle>
          </div>
          <div>
            <Toggle
              aria-label="Toggle"
              variant="outline"
              size="sm"
              className="xs:text-xs"
            >
              Detailed Reviews
            </Toggle>
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap p-1 m-2 justify-center">
        {ReviewArray.map((imageUrl, index) => (
          <Card className="m-2" key={index}>
            <CardContent className="flex items-center justify-center p-2">
              <div className="flex flex-col gap-y-2 max-w-[300px]">
                <div className="flex justify-between">
                  <div className="flex gap-x-3">
                    <img
                      className=" rounded-full"
                      src={imageUrl}
                      alt="image"
                      width={30}
                    />
                    <span className="text-xl">Jay Lapani</span>
                  </div>
                  <span>11 month ago</span>
                </div>
                <p className="text-sm font-extralight text-gray-700">Great place for Authentic Pan Asian. Sushi is fabulous. Overall a 5 star experience as the service by Anit was great. Highly recommended.</p>
 
              <Rating placeholder="ratings" value={4} readonly className=" text-yellow-400" />

              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
