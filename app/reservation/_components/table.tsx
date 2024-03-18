"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface TableProps{
  onContinue:()=>void
}
export const Table = ({onContinue}:TableProps) => {
  const router = useRouter();
  useEffect(() => {
    const wrapper = document.getElementById("wrapper")!
    wrapper.querySelectorAll("button").forEach(function (i) {
      i.addEventListener("click", onContinue);
    });
  });

  return (
    <>
      <Tabs defaultValue="menu" className="m-0">
        <TabsList className="w-full flex justify-evenly">
          <TabsTrigger value="menu">1st Floor</TabsTrigger>
          <TabsTrigger value="about">2nd Floor</TabsTrigger>
          <TabsTrigger value="gallery">3rd Floor</TabsTrigger>
        </TabsList>
      </Tabs>

      <main>
        <div className="flex items-center justify-center">
          <div
            className="flex xs-6:rotate-90 xs:scale-50 flex-col justify-center gap-y-8"
            id="wrapper"
          >
            <div className="flex flex-row gap-x-4">
              <button className="bg-[#989898] rounded-xl border-4 hover:bg-[#454542] border-white h-32 aspect-square"></button>

              <button className="bg-[#989898] rounded-xl border-4 hover:bg-[#454542] border-white h-32 aspect-[2/1]"></button>

              <button className="bg-[#989898] rounded-xl border-4 hover:bg-[#454542] border-white h-32 aspect-square"></button>

              <button className="bg-[#989898] rounded-xl border-4 hover:bg-[#454542] border-white h-32 aspect-square"></button>
            </div>
            <div className="flex justify-end items-center gap-x-12 h-52">
              <button className="bg-[#989898] rounded-full border-4 hover:bg-[#454542] border-white w-48 h-32"></button>

              <button className="bg-[#989898] rounded-xl border-4 hover:bg-[#454542] border-white h-52 w-32"></button>
            </div>
            <div className="flex gap-x-4 justify-end">
              <button className="bg-[#989898] rounded-xl border-4 hover:bg-[#454542] border-white h-32 aspect-[2/1]"></button>

              <button className="bg-[#989898] rounded-xl border-4 hover:bg-[#454542] border-white h-32 aspect-[2/1]"></button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
