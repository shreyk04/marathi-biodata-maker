import React from "react";
import ImageSelector from "./ImageSelctor";
import { Input } from "@/components/ui/input";
import { biodataForm } from "./FormData";
import FormSection from "./FormSection";

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center md:max-w-[400px]">
      <ImageSelector />
      <Input
        defaultValue={"|| श्री गणेशाय नम: ||"}
        type="text"
        className="text-center mb-8"
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
