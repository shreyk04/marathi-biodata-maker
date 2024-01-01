import React from "react";
import ImageSelector from "./ImageSelctor";
import { Input } from "@/components/ui/input";
import { biodataForm } from "./FormData";
import FormSection from "./FormSection";
import InputWithTranslator from "./InputWithTranslator";

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center md:max-w-[400px]">
      <ImageSelector />
      <InputWithTranslator
        props={{ defaultValue: "|| श्री गणेशाय नम: ||", className: "mb-8" }}
        inputClassName="text-center"
      />
    </div>
  );
};

export default function CreateBiodata() {
  return (
    <div className="w-full py-8">
      <form action="" className="flex flex-col items-center">
        <Header />
        <div className="flex flex-col gap-2 w-full">
          {biodataForm.map((sectionData, index) => (
            <FormSection sectionData={sectionData} key={index} />
          ))}
        </div>
      </form>
    </div>
  );
}
