
export type FormFieldInputType = {
  name: string;
  placeholder?: string;
  type?: "input" | "date" | "select"
  values?: string[]


}

export type FormFieldType = {
  labels: string[];
  input: FormFieldInputType;
};


export  type FormSectionType = {
  name: string;
  titles: string[];
  fields: FormFieldType[];
};


export  type FormSectionsType = FormSectionType[];

