import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DetailsProps{
    onContinue:()=>void
  }
export const Details = ({onContinue}:DetailsProps) => {
  return (
    <div className="flex justify-center">
    <div className="flex flex-col gap-y-4 w-[90%] sm:w-[500px] bg-gray-200 p-4 rounded-md">
      <div>
        <h3>Your information Details</h3>
      </div>
      <div>
        <span>Name</span>
        <Input  type="text" placeholder="enter your name"/>
      </div>
      <div>
        <span>Email</span>
        <Input type="email" placeholder="enter your email address" />
      </div>
      <div>
        <span>Phone Number</span>
        <Input type="number" placeholder="enter your name" />
      </div>
      <div>
        <span>Ocaasion</span>
        <Select>
          <SelectTrigger className="h-9 px-2.5 rounded-3xl">
            <SelectValue placeholder="Occasion" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="birthday">Birthday</SelectItem>
              <SelectItem value="anniversary">Anniversary</SelectItem>
              <SelectItem value="dinner">Dinner</SelectItem>
              <SelectItem value="corporate">Corporate</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button className={"m-3 bg-blue-700"} onClick={onContinue}>Continue</Button>

    </div>
    </div>
  );
};
