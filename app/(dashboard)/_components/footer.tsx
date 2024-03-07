import { Heart, HomeIcon, LucideCompass, MessageSquare, UserCircle2 } from "lucide-react"

export const Footer = () =>{
    return(
        

<footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">

    <ul className="flex justify-evenly items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="flex flex-col items-center text-blue-800"><HomeIcon color="blue"/>Home</a>
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
    </ul>
</footer>

    )
}