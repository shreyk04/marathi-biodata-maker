"use client"
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
    const response = await fetch(
      `https://inputtools.google.com/request?text=${text}&itc=mr-t-i0-und&num=5&cp=0&cs=1&ie=utf-8&oe=utf-8`,

    );
    const translation = await response.json();
    console.log(translation);

    return translation;
  } catch (error) {
    console.error("Translation error:", error);
    return null;
  }
};

function InputT({
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
  const [open, setOpen] = useState(false);
  const [translatedOptions, setTranslatedOptions] = useState<string[]>([]);

  const handleInputChange = async (e: any) => {
    const text = e.target.value;

    setInputText(text);
    const result = await translate({ text });
    console.log(result);

    setTranslatedOptions(result ? [result] : []);
    setOpen(true);
  };

  const [inputText, setInputText] = useState(props?.defaultValue || "");

  useEffect(() => {
    if (onChange) onChange(inputText);
  }, [inputText]);

  return (
    <div className={cn("w-full relative flex gap-2", props?.className)}>
      <Input
        className={cn(inputClassName)}
        onChange={handleInputChange}
        onFocus={handleInputChange}
        value={inputText}
        placeholder={placeholder}
      />
      <Popover open={open} onOpenChange={setOpen}>
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
          className={`w-[200px] p-0 z-[101] ${open && translatedOptions.length > 0 ? "visible" : "hidden"
            }`}
        >
          <Command>
            <CommandGroup>
              {translatedOptions.map((option: string, index) => (
                <CommandItem
                  key={index}
                  onSelect={() => {
                    setInputText(option);
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

export default InputT;
