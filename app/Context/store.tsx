"use client"

import { createContext, Dispatch, ReactElement, SetStateAction, useContext, useEffect, useState } from "react";

interface FormContextType {
    form: any;
    setForm: any;

}

export const FormContext = createContext<FormContextType | undefined>(undefined);



export const FormProvider = ({ children }: { children: ReactElement }) => {
    const [form, setForm] = useState(() => {
        const savedForm = localStorage.getItem("form")
        return savedForm ? JSON.parse(savedForm) : {}
    })

    useEffect(() => {
        localStorage.setItem("form", JSON.stringify(form))
    }, [form])

    return (
        <FormContext.Provider value={{ form, setForm }}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () => useContext(FormContext) as { form: any, setForm: any }

