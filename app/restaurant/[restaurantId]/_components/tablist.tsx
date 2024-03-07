import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Menu } from "./menu"
import { About } from "./about"
import { Gellery } from "./gellery"
import { Review } from "./review"

export const TabList = () =>{
    return(
    <Tabs defaultValue="menu" className="m-0">
  <TabsList className="w-full flex justify-evenly">
    <TabsTrigger value="menu">Menu</TabsTrigger>
    <TabsTrigger value="about">About</TabsTrigger>
    <TabsTrigger value="gallery">Gallery</TabsTrigger>
    <TabsTrigger value="reviews">Reviews</TabsTrigger>
  </TabsList>
  <TabsContent value="menu"><Menu /></TabsContent>
  <TabsContent value="about"><About /></TabsContent>
  <TabsContent value="gallery"><Gellery /></TabsContent>
  <TabsContent value="reviews"><Review /></TabsContent>
</Tabs>

    )
}