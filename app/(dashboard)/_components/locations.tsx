"use client"

import * as React from "react"
// import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {  ChevronDownIcon, Search} from "lucide-react"
import { useEffect, useState } from "react"


const locations = [
  {
    value: "Gandhinagar",
    label: "PDPU,Gandhinagar,382421",
  },
  {
    value: "Ahmedabad",
    label: "Iskon,Ahmendabad,380022",
  },
]

export function Locations() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("Select location")
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className="bg-transparent hover:bg-transparent text-xs pl-5 md:text-sm md:p-4 md:mr-4 max-w-[9rem] md:max-w-[12rem] overflow-ellipsis outline-none text-white"
        >
          {value}
          <ChevronDownIcon className="ml-1 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search locations" className="h-9" />
          <CommandEmpty>No result found.</CommandEmpty>
          <CommandGroup>
            {locations.map((location) => (
              <CommandItem
                key={location.value}
                value={location.value}
                onSelect={(currentValue) => {
                  setValue(currentValue)
                  setOpen(false)
                }}
              >
                {location.label}
                <Search
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === location.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            )
            )}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
