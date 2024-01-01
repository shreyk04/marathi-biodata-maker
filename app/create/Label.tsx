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

export const Label = ({ labels }: { labels: string[] }) => {
  const isEmty = labels.length == 0;
  const [newText, setNewText] = useState("new");
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={!isEmty && labels[0]} />
      </SelectTrigger>
      <SelectContent>
        {labels.map((title: string) => (
          <SelectItem value={title} key={title}>
            {title}
          </SelectItem>
        ))}
        {/* <SelectItem value={newText}>
          <Input onChange={(e) => setNewText(e.target.value)} value={newText} />
        </SelectItem> */}
      </SelectContent>
    </Select>
  );
};
