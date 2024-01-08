"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

const Options = [
  { id: 0, label: "Today", key: "0" },
  { id: 1, label: "Tommorrow", key: "1" },
  { id: 2, label: "In 3 days", key: "3" },
  { id: 3, label: "In a week", key: "7" },
  { id: 4, label: "1 Month", key: "30" },
  { id: 5, label: "2 Month", key: "60" },
  { id: 6, label: "3 Month", key: "120" },
];

const DatePicker = ({ date, setDate }) => {
  return (
    <Popover
      placement="bottom"
      className="bg-black border rounded border-white border-solid"
    >
      <PopoverTrigger>
        <button
          className={cn(
            "w-full bg-black mt-2 hover:bg-zinc-800 hover:text-white flex items-center text-left font-normal border border-white py-2 px-4 rounded-md",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date && typeof date === "object" && !isNaN(date.getTime()) ? (
            format(date, "PPP")
          ) : (
            <span>Pick a date</span>
          )}
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        className="flex w-auto flex-col bg-black border-white border-solid space-y-2 p-2"
      >
        <Select
          placeholder="Select Deadline"
          labelPlacement="outside"
          className="bg-black"
          value={date ? date.toString() : ""}
          onChange={(e) => {
            const selectedValue = parseInt(e.target.value, 10);
            if (!isNaN(selectedValue)) {
              const newDate = addDays(new Date(), selectedValue);
              setDate(newDate);
            }
          }}
        >
          {Options.map((item, index) => {
            return (
              <SelectItem key={item.key} value={item.key}>
                {item.label}
              </SelectItem>
            );
          })}
        </Select>
        <div className="rounded-md border">
          <Calendar
            className="bg-black"
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};
export default DatePicker;
