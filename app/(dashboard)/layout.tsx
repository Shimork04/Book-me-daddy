import { NavBar } from "./_components/navbar";
import { SideBar } from "./_components/sidebar";
interface DashBoardProps {
    children: React.ReactNode;
}


const DashBoardLayout = ({ children }: DashBoardProps) => {

    return (
        <div >
        <main className="h-full xs-6:mb-24">

                
                <div className="flex flex-col h-full gap-x-3">

                {/* <SideBar /> */}
                        <NavBar />
                        <SideBar />
                    <div className="h-full flex justify-center ">

                        <div className="md:pl-[100px] lg:pl-0">
                        {children}
                        </div>

                    </div>

                </div>
                
         
        </main>
        </div>
    )

}
export default DashBoardLayout;