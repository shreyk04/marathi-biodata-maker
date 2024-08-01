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
import { Languages, Loader } from "lucide-react";
import { cn } from "@/lib/utils";
import { PrimitiveDivProps } from "@radix-ui/react-dialog";

const translate = async ({ text }: { text: string }) => {
  try {
    const translateResponse = await fetch(
      `https://inputtools.google.com/request?text=${text}&itc=mr-t-i0-und&num=5&cp=0&cs=1&ie=utf-8&oe=utf-8`
    );
    const translateResponseJson = await translateResponse.json();
    console.log("translateResponseJson ", translateResponseJson);
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

  const [showTranslatedResult, setShowTranslatedResult] = useState(false);
  const [translatedOptions, setTranslatedOptions] = useState([]);
  const [fetchingTransaltion, setFetchingTranslations] = useState(false);

  // console.log(showTranslatedResult);

  const handleInputChange = async (e: any) => {

    const text = e.target.value;


    // if (inputText == text) return;


    setInputText(text);
    if (text.trim()) {

      setFetchingTranslations(true);
      const result = await translate({ text });
      setFetchingTranslations(false);
      setTranslatedOptions(result?.[1]?.[0]?.[1] || []);
      setShowTranslatedResult(true)

    } else {
      setTranslatedOptions([])
      setShowTranslatedResult(false)
    }
    // setOpen(result?.[1]?.[0]?.[1]?.length > 0);

  };

  const [inputText, setInputText] = useState(props?.defaultValue || "");
  const [isOptionSelected, setIsOptionSelected] = useState(false)

  useEffect(() => {
    if (onChange) onChange(inputText);
  }, [inputText]);

  const handleFocus = (e: any) => {
    handleInputChange(e);
    setShowTranslatedResult(true)
  }
  const handleBlur = () => {
    if (!isOptionSelected) {
      setShowTranslatedResult(false)
    }
    setIsOptionSelected(false)
  }

  // useEffect(() => {
  //   if (props.defaultValue) setInputText(props.defaultValue as string);
  // }, [props.defaultValue]);

  return (
    <div className={cn("w-full relative flex gap-2", props?.className)}>
      <Input
        className={cn(inputClassName)}
        onChange={handleInputChange}
        onFocus={handleFocus}

        onBlur={handleBlur}
        name="first_name"
        value={inputText}
        autoComplete="off"

        placeholder={placeholder}
      />
      <Button
        variant="ghost"
        role="combobox"
        className="w-fit inline-block opacity-35 absolute right-0"
      >
        <Languages size={16} />
      </Button>
      {showTranslatedResult && <div className="absolute left-0 bg-white shadow-xl rounded-xl top-[102%] z-[105] w-full p-2">
        {fetchingTransaltion && <Loader />}
        {translatedOptions.map((option) => (
          <div
            key={option}
            onMouseDown={() => {
              setInputText(option);
              setShowTranslatedResult(false);
              setIsOptionSelected(true)
            }}
            className="p-2 cursor-pointer hover:bg-slate-100 rounded-md"
          >
            {option}
          </div>
        ))}
      </div>}
    </div>
  );
}

export default InputWithTranslator;
