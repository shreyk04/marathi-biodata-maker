import React from "react";
import {
  FormSectionType,
  FormFieldType,
  FormFieldInputType,
} from "./FormSectionTypes";
import { Label } from "./Label";
import { Input } from "@/components/ui/input";
import DatePicker from "./DatePicker";

const FormInput = ({ inputData }: { inputData: FormFieldInputType }) => {
  const { name, placeholder, type, values } = inputData;

  if (type == "select") return <Label labels={values || []} />;

  if (type == "date")
    return <DatePicker onDateChange={(data: any) => console.log(data)} />;

  return <Input name={inputData.name} placeholder={placeholder} />;
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
