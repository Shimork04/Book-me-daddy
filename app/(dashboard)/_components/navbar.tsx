import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { Locations } from "./locations";

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
      <div className="px-4 py-8 flex justify-between items-center gap-x-3">
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

        <div className="xl:max-w-lg 2xl:max-w-2xl  bg-gray-100 rounded-md flex items-center p-1 xs:flex-col">
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
          <div className="w-full relative">
            <Search className="absolute top-1/2 transform -translate-y-1/2 left-3 h-4 w-4 text-muted-foreground" />
            <Input
              // onChange={} handle changes
              className=" w-full max-w[510px] pl-9"
              placeholder="Restaurents.."
            />
          </div>
          {/* <svg className="ml-auto h-5 px-4 text-gray-500" aria-hidden="true" focusable="false" data-prefix="far" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-search fa-w-16 fa-9x"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"></path></svg> */}
        </div>

        {/* <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
      <span className="font-bold md:text-xl">8 800 332 65-66</span>
      <span className="font-semibold text-sm text-gray-400">Support 24/7</span>
    </div> */}

        <div className="m-4 sm:flex">
          <Image src="/profile-user.png" height={30} width={30} alt="profile" />
        </div>
      </div>
    </header>
  );
};
