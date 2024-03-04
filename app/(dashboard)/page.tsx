"use client"

import { Cuisines } from "./cuisines/cuisines";
import { PopularRestaurants } from "./popular-restaurants/popularRestaurants";
import { Ads } from "./special-offers/ads";

export default function DashBoard() {
    return (
        <div className="h-[calc(100%-80px)] flax-1 p-2">
            <div className="align-center justify-center flex">
            <Ads />
            </div>
            <div className="align-center justify-center flex">
            <Cuisines />
            </div>
            <div className="align-center justify-center flex">
            <PopularRestaurants />
            </div>
        </div>
    );
}
