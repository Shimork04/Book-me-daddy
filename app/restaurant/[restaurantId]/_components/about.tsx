import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { MessageSquare, Phone, Search, SquareDot } from "lucide-react";

export const About = () => {
  return (
    <div className="flex flex-col gap-y-4 m-4">
      <div className="flex flex-col justify-between">
        <span className="text-black text-lg">About</span>
        <p className="text-gray-500 leading-7 mt-4 md:text-sm xs:text-xs">
          Introducing to all, Surat's most iconic, rooftop terrace restaurant
          which imparts a stunning bird's eye view of the Surat city.
        </p>
      </div>
      <div className="flex flex-col gap-y-3">
        <span className="text-black text-lg">Restaurant Contact</span>
        <div className="flex justify-between">
          <div className="flex gap-x-4">
            <img
              src="/logo.png"
              alt="profile"
              className=" rounded-full"
              width={40}
            />
            <div className="flex flex-col">
              <span className="text-xl">Jay Lapani</span>
              <span className="text-sm">Owner</span>
            </div>
          </div>
          <div>
            <Button variant="ghost">
              <MessageSquare color="blue" />
            </Button>
            <Button variant="ghost">
              <Phone color="blue" />
            </Button>
          </div>
        </div>
      </div>
      <div className=" flex flex-wrap p-1 m-2 justify-center"></div>
    </div>
  );
};
