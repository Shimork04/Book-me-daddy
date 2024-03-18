import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export const Success = () =>{
    return(
        <div className="flex justify-center ">
            <div className="flex flex-col justify-center gap-y-4 w-[90%] sm:w-[400px] bg-gray-200 p-4 rounded-md">
            <div className="flex flex-col items-center">
                <CheckCircle2 size={120} fill="blue" className=" text-gray-200" />
                <span className="tex-xl font-bold">Successfully Reserved Your Table!</span>
            </div>
            
            <div className="flex flex-col gap-y-4 w-full ">
            
            <div className="flex justify-between">
                <span>Name</span>
                <span>Jay Lapani</span>
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
            <Link href="/">
            <Button className=" bg-blue-700 w-full">Navigate to Restaurant</Button>
            </Link>
          </div>
          </div>
        </div>
    )
}