import { NavBar } from "./_components/navbar";
interface DashBoardProps {
    children: React.ReactNode;
}


const DashBoardLayout = ({ children }: DashBoardProps) => {

    return (
        <main className="h-full mb-24">

                <div className="flex h-full gap-x-3">

                {/* <SideBar /> */}

                    <div className="h-full flex-1">

                        <NavBar />
                        {children}

                    </div>

                </div>

         
        </main>
    )

}
export default DashBoardLayout;