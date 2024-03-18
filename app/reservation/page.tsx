"use client"
import { Handler } from "./_components/modelHandler"


export default function Page() {
    return(
        <div className="flex flex-col gap-y-4">
            <div className="flex justify-center text-xl md:text-2xl font-semibold text-gray-900 mt-4">
            <h3>
                Table Booking
            </h3>
            </div>
            <Handler />
        </div>
    )
}