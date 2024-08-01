"use client"
import React, { useEffect, useState } from "react";
import { FormSectionType } from "./FormSectionTypes";
import { Label } from "./Label";
import FormField from "./FormField";
import { useForm } from "../Context/store";
import { getSavedFrom } from "./utils";

function FormSection({ sectionData }: { sectionData: FormSectionType, }) {
  const fields = sectionData.fields;
  const labels = sectionData.titles;


  const { setForm, form } = useForm();

  const savedForm = getSavedFrom();



  useEffect(() => {
    // if (savedForm) {
    //   setForm(savedForm)
    // } else {
    setForm((prevForm: any) => ({
      ...prevForm,
      labels,
    }))
    // }



  }, [setForm, labels])

  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(form));
  }, [form]);




  return (

    <div className="bg-white shadow-xl rounded-sm p-3 w-full border-primary-foreground border ">
      {/* section label */}
      <div className="w-full md:max-w-[400px] mb-6 mx-auto ">
        <Label labels={labels} onLabelChange={(value: any) => {
          setForm((prevForm: any) => ({
            ...prevForm,
            titles: [value] // Update titles
          }));

        }} initialValue={labels[0]} />

      </div>
      {/* section form */}
      <div className="grid grid-cols-2 gap-y-8 gap-x-4 w-full">
        {fields.map((field, index) => (
          <FormField fieldData={field} key={index} />
        ))}


      </div>

    </div>

  );
}

export default FormSection;
