"use client";
import { createContext, ReactElement, useContext, useEffect, useState } from "react";
import { getSavedFormData } from "../create/utils";

interface FormContextType {
  form: any;
  setForm: (form: any) => void;
}
const imgBaseSrc = "/images/ganapati-bappa";

const FormContext = createContext<FormContextType | undefined>(undefined);
const DEFAULT_IMAGE=`${imgBaseSrc}/h3.png`

export const FormProvider = ({ children }: { children: ReactElement }) => {
  const [form, setForm] = useState<any>({selectedImage:DEFAULT_IMAGE}); // Start as null
  const [hydrated, setHydrated] = useState(false); // Track hydration

  useEffect(() => {
    if (typeof window !== "undefined") {
      setForm(getSavedFormData() || {}); // Load after hydration
      setHydrated(true);
    }
  }, []);

  
  useEffect(()=>{
    if(!hydrated)return
    console.log(form);
    localStorage.setItem("form", JSON.stringify(form));
  },[form,hydrated])
  

  if (!hydrated || !form) return null; // Prevent mismatched SSR vs CSR

  return <FormContext.Provider value={{ form, setForm }}>{children}</FormContext.Provider>;
};

export const useForm = () => {
  const context = useContext(FormContext);


  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};

