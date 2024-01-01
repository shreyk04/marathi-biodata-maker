import React from "react";
import { FormSectionType } from "./FormSectionTypes";
import { Label } from "./Label";
import FormField from "./FormField";

function FormSection({ sectionData }: { sectionData: FormSectionType }) {
  const fields = sectionData.fields;
  const labels = sectionData.titles;
  return (
    <div className="bg-rose-50 rounded-sm p-3 w-full border-primary-foreground border border-rose-300">
      {/* section label */}
      <div className="w-full md:max-w-[400px] mb-6 mx-auto">
        <Label labels={labels} />
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
