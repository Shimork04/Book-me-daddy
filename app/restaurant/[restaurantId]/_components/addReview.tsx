
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger,DialogHeader, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Rating } from "@material-tailwind/react"
import { DialogTitle } from "@radix-ui/react-dialog"
interface AddReviewProp{
    children:React.ReactNode
}
export const AddReview = ({children}:AddReviewProp) =>{
    return(
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className=" md:text-xl">How is your experience?</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-y-2">
                    <hr color="black" ></hr>
                    <div className="flex flex-col items-center gap-y-2">
                        <span className=" text-md">Your overall rating</span>
                        <Rating value={3} placeholder={"rating"} className=" text-yellow-400" />
                    </div>
                        <span className=" text-sm font-semibold">Add detailed review</span>
                        <Textarea placeholder="Enter here" />
                        <span className=" text-sm font-semibold">Add photos</span>
                        <Input type="file" className="w-[50%]" />
                </div>
                <DialogFooter><Button type="submit" size="lg">Submit</Button></DialogFooter>
            </DialogContent>
        </Dialog>
    )
}