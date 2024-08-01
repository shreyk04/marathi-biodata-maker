
export type FormFieldInputType = {
  placeholder?: string;
  type?: "input" | "date" | "select"|"number"|"tel"
  values?: string[]


}

export type FormFieldType = {
  id: string;
  labels: string[];
  input: FormFieldInputType;
  isLabelStatic?: boolean;
};


export  type FormSectionType = {
  name: string;
  titles: string[];
  fields: FormFieldType[];
};


export  type FormSectionsType = FormSectionType[];

