"use client"
import { Heart, HomeIcon, LucideCompass, MessageSquare, UserCircle2 } from "lucide-react"
export const SideBar = () =>{
return(
<div className=" z-20 hidden md:flex flex-col space-y-6 ">
    <div className="h-[50%] fixed left-0 top-[25%] flex justify-center">
    <div className="z-20 w-full shadow p-3 flex items-center rounded-r-2xl bg-blue-600 ">

    <ul className="flex flex-col justify-between items-center text-sm font-medium  text-gray-500 dark:text-gray-400 sm:mt-0 gap-y-6">
        <li>
            <a href="#" className="flex flex-col items-center"><HomeIcon />Home</a>
        </li>
        <li>
            <a href="#" className=" flex flex-col items-center"><MessageSquare/>Chat</a>
        </li>
        
        <li>
            <a href="#" className=" flex flex-col items-center"><Heart/>Whishlist</a>
        </li>
        <li>
            <a href="#" className="flex flex-col items-center"><LucideCompass/>Discover</a>
        </li>
        <li>
            <a href="#" className="flex flex-col items-center"><UserCircle2/>Profile</a>
        </li>
        <style jsx>{`
        li {
          color:white
        }
        li:hover {
          color: black;
        }
      `}</style>
    </ul>
</div>
    </div>
</div>
)
}