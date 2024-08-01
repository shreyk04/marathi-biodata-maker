"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function DateSelector({ onDateChange }: { onDateChange: any }) {
    const [date, setDate] = React.useState<Date>()
    // console.log(date);
    const marathiMonths = [
        "जानेवारी",
        "फेब्रुवारी",
        "मार्च",
        "एप्रिल",
        "मे",
        "जून",
        "जुलै",
        "ऑगस्ट",
        "सप्टेंबर",
        "ऑक्टोबर",
        "नोव्हेंबर",
        "डिसेंबर",
    ];

    const formatDateInMarathi = (selectedDate: Date) => {
        const day = selectedDate.getDate();
        const month = marathiMonths[selectedDate.getMonth()]
        const year = selectedDate.getFullYear();
        return `${day} ${month} ${year}`;

    }
    const handleDateChange = (selectedDate: Date | undefined) => {
        if (selectedDate) {
            // Ensure the date is in UTC
            const utcDate = new Date(Date.UTC(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()));
            setDate(utcDate);
            console.log("selected date is ", utcDate);
            const formattedDate = formatDateInMarathi(utcDate)
            onDateChange(formattedDate);
            console.log(formattedDate);

        } else {
            setDate(undefined);
            onDateChange(undefined);
        }
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        " justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>जन्मतारीख निवडा </span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleDateChange}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
