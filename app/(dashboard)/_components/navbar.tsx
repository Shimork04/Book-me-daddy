import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { BellDot, Filter, LucideSettings2, Search } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Locations } from "./locations";
import { Button } from "@/components/ui/button";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

export const NavBar = () => {
  return (
    // <div classNameName="flex items-center gap-x-4 p-5">
    //   <div classNameName="logo">
    //     <span classNameName="h-full w-full bg-red-400">logo space</span>
    //   </div>
    //   <div classNameName="location">
    //     <div>
    //       <Image height={4} width={4} src="/location.png" alt="location" />
    //     </div>
    //     <div>
    //       <span classNameName="w-5">open dialog</span>
    //     </div>
    //   </div>
    //   <div>
    //     <div classNameName="w-full relative">
    //       <Search classNameName="absolute top-1/2 transform -translate-y-1/2 left-3 h-4 w-4 text-muted-foreground" />
    //       <Input
    //         // onChange={} handle changes
    //         classNameName=" w-full max-w[516px] pl-9"
    //         placeholder="Search restaurents.."
    //       />
    //     </div>
    //   </div>
    // </div>

    <header className="bg-white">
      <div className="px-2 pb-4 pt-2 flex justify-between items-center gap-x-3">
        <div className="hidden sm:flex items-center flex-shrink-0  gap-x-2 ">
          <Image
            className="h-8 md:h-10"
            src="/logo.png"
            alt=""
            width={80}
            height={80}
          />
          <span className={cn("font-semibold text-2xl", PoppinsFont.className)}>
            TableUp
          </span>
        </div>

        <div className="xl:max-w-lg 2xl:max-w-2xl  bg-gray-100 rounded-md flex items-center p-2 xs:flex-col xs:items-start xs:w-full">
        <div className="flex items-center">
          <Image
            src="/location.png"
            alt=""
            width={10}
            height={10}
            className="mr-[-15px] w-3 h-3 md:w-5 md:h-5"
          />
          <Locations />
          </div>
          <div className="w-full relative flex flex-row justify-between">
            <div className="flex flex-row">
            <Search className="absolute top-1/2 transform -translate-y-1/2 left-3 h-4 w-4 text-muted-foreground" />
            <Input
              // onChange={} handle changes
              className="w-full max-w[510px] pl-9"
              placeholder="Restaurents.."
            />
            </div>
          <div>
            <Button variant="ghost" className="opacity-70 hover:opacity-100"><LucideSettings2 /></Button>
          </div>
          <div>
            <Button variant="ghost" className="bg-blue-400 hover:bg-blue-500"><BellDot className="h-5 w-5"  /></Button>
          </div>
     
          </div>
        </div>

        {/* <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
      <span className="font-bold md:text-xl">8 800 332 65-66</span>
      <span className="font-semibold text-sm text-gray-400">Support 24/7</span>
    </div> */}

        <div className="hidden m-4 sm:flex">
          <Image src="/profile-user.png" height={30} width={30} alt="profile" />
        </div>
      </div>
    </header>
  );
};
