"use client";
import React, { useState } from "react";
import { FormFieldType, FormFieldInputType } from "./FormSectionTypes";
import { Label } from "./Label";
import DatePicker from "./DatePicker";
import InputWithTranslator from "./InputWithTranslator";

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

const FormInput = ({ inputData }: { inputData: FormFieldInputType }) => {
  const { name, placeholder, type, values } = inputData;

  if (type == "select") return <Label labels={values || []} />;

  if (type == "date")
    return <DatePicker onDateChange={(data: any) => console.log(data)} />;

  return (
    <>
      <InputWithTranslator placeholder={placeholder} />
    </>
  );
};

function FormField({ fieldData }: { fieldData: FormFieldType }) {
  const { labels, input } = fieldData;
  return (
    <div className="flex flex-col gap-1 w-full">
      <Label labels={labels} />
      <FormInput inputData={input} />
    </div>
  );
}

export default FormField;
