"use client";
import React, { useEffect, useState } from "react";
import { FormFieldType, FormFieldInputType } from "./FormSectionTypes";
import { Label } from "./Label";
import DatePicker from "./DatePicker";
import InputWithTranslator from "./InputWithTranslator";
import { formvalues } from "./formValues";
import { useForm } from "../Context/store";
import { getSavedFrom } from "./utils";
import { DateSelector } from "./DateSelector";
import MobileInput from "./MobileInput";

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

const FormInput = ({ inputData, onChange, initialValue }: { inputData: FormFieldInputType, onChange: any, initialValue: string }) => {
  const { placeholder, type, values } = inputData;

  if (type == "select") return <Label labels={values || []} onLabelChange={(e: any) => onChange(e)} initialValue={initialValue} />;

  if (type == "date")
    // return <DatePicker onDateChange={(data: any) => onChange(data)} />;
    return <DateSelector onDateChange={(data: any) => onChange(data)} />

  if (type === "tel") return <MobileInput placeholder={placeholder} onMobileNumberChange={(data: any) => onChange(data)} />;

  return (
    <>
      <InputWithTranslator placeholder={placeholder}
        onChange={(value: any) => onChange(value)}
        props={{ defaultValue: initialValue }}
      />
    </>
  );
};

function FormField({ fieldData }: { fieldData: FormFieldType }) {
  const { labels, input, isLabelStatic, id } = fieldData;
  const [labelValue, setLabelValue] = useState(labels[0]);
  const [inputValue, setInputValue] = useState("");
  const { setForm, form } = useForm();

  const savedForm = getSavedFrom();

  const savedField = savedForm[id];
  // console.log(savedField)

  useEffect(() => {
    const newForm = {

      [id]: { label: labelValue, input: inputValue }
    }
    const oldForm = structuredClone(form);
    // localStorage.setItem
    setForm({ ...oldForm, ...newForm });
  }, [labelValue, inputValue])


  return (
    <div className="flex flex-col gap-4 w-full">
      <div className=" h-10">

        <Label labels={labels} onLabelChange={(e: any) => setLabelValue(e)} isLabelStatic={isLabelStatic} initialValue={savedField?.label || labels[0]} />
      </div>
      <FormInput inputData={input} onChange={(e: any) => setInputValue(e)} initialValue={savedField?.input || ""} />
    </div>
  );
}

export default FormField;
