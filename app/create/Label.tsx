"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import InputWithTranslator from "./InputWithTranslator";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm } from "../Context/store";

export const Label = ({ labels, onLabelChange, isLabelStatic, initialValue }: { labels: string[], onLabelChange: any, isLabelStatic?: boolean, initialValue: string }) => {
  const isEmty = labels.length == 0;
  const [newItems, setNewItems] = useState<any>([]);
  const [newInput, setNewInput] = useState("");
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    onLabelChange(value);
  }, [value])

  if (isLabelStatic) return <label className="text-red-600 font-medium text-base">{labels[0]}</label>



  const { setForm, form } = useForm();
  // useEffect(() => {
  //   const newForm = {

  //     value
  //   }
  //   const oldForm = structuredClone(form);
  //   // localStorage.setItem
  //   setForm({ ...oldForm, ...newForm });
  // }, [value])
  return (
    <Select value={value} onValueChange={(value: string) => setValue(value)}>
      <SelectTrigger className="p-0 w-full border-none   font-medium    text-red-600 text-base focus:outline-none">
        <SelectValue placeholder={!isEmty && labels[0]} />
      </SelectTrigger>
      <SelectContent className="z-[101] focus:outline-none border-none p-8  ">
        {labels.map((title: string) => (
          <SelectItem value={title} key={title} className="focus:outline-none border-none text-base " >
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
          <InputWithTranslator onChange={(text: string) => setNewInput(text)}

          />
        </div>
      </SelectContent>
    </Select>
  );
};
