// "use client"
// import Image, { StaticImageData } from "next/image";
// import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
// import { Card, CardContent } from "@/components/ui/card";
// import { Clock, MapPin, Star } from "lucide-react";

// const RestaurantsArray = [
//   "/restaurant.jpg",
//   "/restaurant.jpg",
//   "/restaurant.jpg",
//   "/restaurant.jpg",
// ];

// const slides = [
//   {
//     img: RestaurantsArray[0],
//   },
//   {
//     img: RestaurantsArray[1],
//   },
//   {
//     img: "/offer1.jpg",
//   },
//   {
//     img: RestaurantsArray[3],
//   },
// ];

// interface Slide {
//   img: StaticImageData;
// }

//  export const MainRestaurant = ()=> {
//   const [itemCount, setItemCount] = useState<number>(1);
//   const [cartItemCount, setCartItemCount] = useState<number>(0);
//   const [cartBadgeCount, setCartBadgeCount] = useState<number>(0);
//   const [addedToCart, setAddedToCart] = useState<boolean>(false);
//   const [curentIndex, setCurrentindex] = useState<number>(0);
//   const [slidesModalOpen, setSlidesModalOpen] = useState<boolean>(false);

//   console.log(itemCount);

//   const addToCart = () => {
//     setCartBadgeCount((prevCount) => prevCount + 1);

//     if (itemCount !== 1) {
//       setCartItemCount((prevCount) => (prevCount += itemCount));
//       setItemCount(1);
//     } else {
//       setCartItemCount((prevCount) => prevCount + 1);
//     }

//     setAddedToCart(true);
//     // Set addedToCart to false after 2 seconds
//     setTimeout(() => {
//       setAddedToCart(false);
//     }, 1000); // 2000 milliseconds = 2 seconds
//   };

//   const addCount = () => {
//     setItemCount((prevCount) => prevCount + 1);
//   };

//   const minusCount = () => {
//     if (itemCount !== 1) {
//       setItemCount((prevCount) => prevCount - 1);
//     }
//   };

//   const prevSlide = () => {
//     const isFirstSlide = curentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : curentIndex - 1;
//     setCurrentindex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = curentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : curentIndex + 1;
//     setCurrentindex(newIndex);
//   };

//   const gotoSlideIndex = (index: number) => {
//     setCurrentindex(index);
//     setSlidesModalOpen(true);
//   };

//   return (
//     <>
//         <div className="w-full h-full md:flex justify-center items-center gap-20 pt-16 md:pt-10 md:gap-10">
//           {/* Image  */}
//           <div className="min-w-fit">
//             <div className="relative w-full ">
//               <img
//                 src={slides[curentIndex].img}
//                 alt=" image 1"
//                 className="md:hidden md:rounded-xl w-[96%] h-full"
//               />
//               <img
//                 src={slides[0].img}
//                 alt=" image 1"
//                 className="hidden md:block md:rounded-xl w-[96%] h-full "
//               />
//               <BsChevronCompactLeft
//                 size={30}
//                 className="w-10 h-10 md:hidden absolute top-1/2 left-5 text-gray-900 font-black p-2 bg-white rounded-full cursor-pointer hover:bg-gray-200 hover:scale-105 duration-200"
//                 onClick={prevSlide}
//               />
//               <BsChevronCompactRight
//                 size={30}
//                 className="w-10 h-10 md:hidden absolute top-1/2 right-5 text-gray-900 font-black p-2 bg-white rounded-full cursor-pointer hover:bg-gray-200 hover:scale-105 duration-200"
//                 onClick={nextSlide}
//               />
//             </div>
//             <div className="hidden md:flex justify-between items-center mt-8">
//               <Carousel
//                 opts={{
//                   align: "start",
//                 }}
//                 className="w-full xsm:max-w-sm max-w-xs"
//               >
//                 <CarouselPrevious className="hidden lg:flex" />
//                 <CarouselContent className="px-1">
//                   {slides.map((slide, index) => (
//                     <CarouselItem
//                       key={index}
//                       className="basis-1/3"
//                     >
//                       <div className="p-1 ">
//                         <Card className="rounded-xl">
//                           <CardContent className="flex items-center justify-center p-2">
//                             <img
//                               key={index}
//                               src={slide.img}
//                               alt={`image ${index + 1}`}
//                               className="w-20 rounded-xl cursor-pointer hover:scale-105 duration-200 max-h-[50px]"
//                               onClick={() => gotoSlideIndex(index)}
//                             />
//                           </CardContent>
//                         </Card>
//                       </div>
//                     </CarouselItem>
//                   ))}
//                 </CarouselContent>
//                 <CarouselNext className="hidden lg:flex" />
//               </Carousel>
//             </div>
//           </div>
//           {/* Product Details */}
//           <div className="p-6">
//             <h1 className="text-blue-700 md:text-sm font-bold uppercase tracking-widest flex items-center gap-x-2">
//              <Star />4.3    130 Reviews
//             </h1>
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
//              The Italian Affair
//             </h1>
            
//             <p className="text-gray-500 leading-7 mt-4 md:text-sm xs:text-xs">
//             Introducing to all, Surat's most iconic, rooftop terrace restaurant which imparts a stunning bird's eye view of the Surat city. Join us in the pursuit of life’s pleasures with quality Italian & Mediterranean food from the restaurant, and beverages from the bar.
//             </p>
            
//             <div className="flex md:flex-col justify-between md:items-start items-center mt-6">
//               <div className="flex items-center font-bold gap-2">
//                 <h1 className="text-2xl  text-gray-900">&#8377;1000.00 </h1>
//                 <span className="text-base ms-2 text-green-600 bg-green-100  px-2 rounded">
//                   10%
//                 </span>
//               </div>
//               <p className="text-gray-400 font-semibold line-through ">
//               &#8377;1100.00
//               </p>
//             </div>
//             <div className="w-full md:flex md:flex-col lg:flex-row items-center gap-2">
//               <div className="w-full lg:w-2/5 flex lg:flex-col md:items-start md:gap-y-2 justify-between items-center mt-8 md:mt-1 text-blue-700 text-sm font-bold rounded-xl  py-4 md:py-2 px-6 md:pl-1">
//                 <p className="flex gap-x-2"
//                 >
//                   <Clock size={18} /> 15 mins
//                 </p>
//                 <p className="flex gap-x-2" ><MapPin size={20} /> Nr. Pitambar Circle</p>
//               </div>
//               <button
//                 onClick={addToCart}
//                 className="w-full lg:w-3/5 flex justify-center items-center gap-4 py-4 md:py-2 mt-4 rounded-xl bg-blue-700 text-white font-bold hover:scale-105 duration-200 active:bg-green-600"
//               >
//                Reserve a Table
//               </button>
//             </div>
//           </div>
//         </div>
//           <hr color="black" />

//         {/* overlay  */}
//         {slidesModalOpen && (
//           <div className="fixed hidden md:block top-0 left-0 w-full h-screen bg-black/60 z-20" />
//         )}

//         {/* Slides Modal  */}
//         <div
//           className={
//             slidesModalOpen
//               ? "w-[400px] h-[400px] hidden md:block rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform z-30 pt-5 ease-in duration-300"
//               : "w-[400px] h-[400px] rounded-xl fixed top-[-150%] left-1/2 -translate-x-1/2 -translate-y-1/2 transform z-30 pt-5 ease-in duration-300"
//           }
//         >
//           <div className="relative w-full h-full">
//             <img
//               src={slides[curentIndex].img}
//               alt=" image 1"
//               className="w-full h-full md:rounded-xl"
//             />
//             <BsChevronCompactLeft
//               size={30}
//               className="w-10 h-10 absolute top-1/2 -left-5 text-gray-900 font-black p-2 bg-white rounded-full cursor-pointer hover:bg-gray-200 hover:scale-105 duration-200"
//               onClick={prevSlide}
//             />
//             <BsChevronCompactRight
//               size={30}
//               className="w-10 h-10 absolute top-1/2 -right-5 text-gray-900 font-black p-2 bg-white rounded-full cursor-pointer hover:bg-gray-200 hover:scale-105 duration-200"
//               onClick={nextSlide}
//             />
//             <AiOutlineClose
//               onClick={() => setSlidesModalOpen(false)}
//               size={20}
//               className="absolute -top-8 right-0 font-bold text-white cursor-pointer hover:scale-125 duration-200"
//             />
//           </div>
//         </div>

//    </>
        
//   );
// }