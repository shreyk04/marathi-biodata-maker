"use client";

import React, { useCallback, useEffect } from "react";
import { biodataForm } from "./FormData"; // Ensure the path is correct
import FormSection from "./FormSection"; // Ensure the path is correct
import InputWithTranslator from "./InputWithTranslator"; // Ensure the path is correct
import { useForm } from "../_context/store"; // Ensure the path is correct
import ImageSelector from "./ImageSelctor";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getSavedFormData } from "./utils";
import { useTemplate } from "../_context/TemplateContext";
import UploadPhoto from "./UploadPhoto";

const Header = () => {
  const { form, setForm } = useForm();

  

  const handleImgChange = 
    (e: any) => {
      setForm((form: any) => ({
        ...form,
        selectedImage: e,
      }));
    }
    // [setForm]
  // );

  const handleInputChange = (e: any) => {
    setForm((form: any) => ({
      ...form,
      title: e,
    }));
  };
  console.log(form.selectedImage);
  

  return (
    <div className="w-full flex flex-col items-center md:max-w-[400px]">
      <ImageSelector
        initialValue={form.selectedImage}
        onImgChange={handleImgChange}
      />
      <InputWithTranslator
        props={{
          defaultValue: form?.title || "|| श्री गणेशाय नम: ||",
          className: "mb-8",
        }}
        inputClassName="text-center"
        onChange={handleInputChange}
      />
    </div>
  );
};

const CreateBiodata = () => {
  const {selectedTemplate} = useTemplate();
  console.log(selectedTemplate);

  
  

  const router = useRouter();
  const { form, setForm } = useForm();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    

    if (Object.keys(form).length < 10) {
      alert("कृपया किमान 10 फील्ड भरा.");
      return;
    }

    // localStorage.setItem("form", JSON.stringify(form));

    router.push("/final-biodata");
  };

  const handleTemplateChange = () => {
    router.push("/");
  };

  if(!selectedTemplate){
    return <h1>Template not selected</h1>
  }
  

  return (
    <div className="w-full py-8 px-4">
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <Header />
        <div className="flex flex-col gap-6 w-full">
          {biodataForm.map((sectionData, index) => (
            <FormSection sectionData={sectionData} key={index} />
          ))}
        </div>
        {
          selectedTemplate.props.withPhoto&& <UploadPhoto />
        }
       

        <Button type="submit" className="mt-5">
          Submit
        </Button>
      </form>
      <Button onClick={handleTemplateChange} className="mt-5">
        Change Template
      </Button>
    </div>
  );
};

export default CreateBiodata;
