"use client";
import React, { useEffect, useState } from "react";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { PrimitiveDivProps } from "@radix-ui/react-dialog";

const translate = async ({ text }: { text: string }) => {
  try {
    const translateResponse = await fetch(
      `https://inputtools.google.com/request?text=${text}&itc=mr-t-i0-und&num=5&cp=0&cs=1&ie=utf-8&oe=utf-8`
    );
    const translateResponseJson = await translateResponse.json();
    console.log(translateResponseJson);
    return translateResponseJson;
  } catch (error) {
    console.log(error);
  }
};

function InputWithTranslator({
  props,
  inputClassName,
  placeholder,
  onChange,
}: {
  props?: PrimitiveDivProps;
  inputClassName?: string;
  placeholder?: string;
  onChange?: any;
}) {
  const [translatedOptions, setTranslatedOptions] = useState([]);

  const handleInputChange = async (e: any) => {
    const text = e.target.value;
    setInputText(text);
    const result = await translate({ text });
    setTranslatedOptions(result?.[1]?.[0]?.[1] || []);
    setOpen(true);
  };

  const [inputText, setInputText] = useState(props?.defaultValue || "");

  useEffect(() => {
    if (onChange) onChange(inputText);
  }, [inputText]);

  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   if (props.defaultValue) setInputText(props.defaultValue as string);
  // }, [props.defaultValue]);

  return (
    <div className={cn("w-full relative flex gap-2", props?.className)}>
      <Input
        className={cn(inputClassName)}
        onChange={handleInputChange}
        onFocus={handleInputChange}
        value={inputText}
        placeholder={placeholder}
      />
      <Popover open={true} onOpenChange={setOpen}>
        <PopoverTrigger asChild className="absolute top-0 right-0 z-[100]">
          <Button
            variant="ghost"
            role="combobox"
            aria-expanded={open}
            className="w-fit inline-block opacity-50"
          >
            <Languages size={16} />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className={`w-[200px] p-0 z-[100] ${
            open && translatedOptions.length > 0 ? "visible" : "hidden"
          }`}
        >
          <Command>
            <CommandGroup>
              {translatedOptions.map((option) => (
                <CommandItem
                  onSelect={(currentValue:any) => {
                    setInputText(currentValue);
                    setOpen(false);
                  }}
                >
                  {option}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default InputWithTranslator;
