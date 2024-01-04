"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import InputWithTranslator from "./InputWithTranslator";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Label = ({ labels }: { labels: string[] }) => {
  const isEmty = labels.length == 0;
  const [newItems, setNewItems] = useState<any>([]);
  const [newInput, setNewInput] = useState("");
  const [value, setValue] = useState("");
  return (
    <Select value={value} onValueChange={(value: string) => setValue(value)}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={!isEmty && labels[0]} />
      </SelectTrigger>
      <SelectContent className="z-[101]">
        {labels.map((title: string) => (
          <SelectItem value={title} key={title}>
            {title}
          </SelectItem>
        ))}
        {newItems.map((title: string) => (
          <SelectItem value={title} key={title}>
            {title}
          </SelectItem>
        ))}
        <div className="flex gap-2 items-center relative">
          <Button
            variant={"outline"}
            onClick={() => {
              setNewItems((prev: any) => [...prev, newInput as any]);
              setValue(newInput);
            }}
          >
            <Check size={"16"} />
          </Button>
          <InputWithTranslator onChange={(text: string) => setNewInput(text)} />
        </div>
      </SelectContent>
    </Select>
  );
};
