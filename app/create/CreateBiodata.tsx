"use client";

import React, { useContext, useEffect, useState } from "react";
import { biodataForm } from "./FormData"; // Ensure the path is correct
import FormSection from "./FormSection"; // Ensure the path is correct
import InputWithTranslator from "./InputWithTranslator"; // Ensure the path is correct
import { FormContext, useForm } from "../Context/store"; // Ensure the path is correct
import ImageSelector from "./ImageSelctor";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { getSavedFrom } from "./utils";
import { useTemplate } from "../Context/TemplateContext";
import UploadPhoto from "./UploadPhoto";

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

const CreateBiodata = () => {

    const router = useRouter();
    const { form, setForm } = useForm();
    const { selectedId } = useTemplate()
    useEffect(() => {
        const savedForm = getSavedFrom();
        setForm(savedForm)
    }, [setForm])

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // if (!selectedId) {
        //     alert("plz select a template")
        // }
        // setForm(form);
        localStorage.setItem("form", JSON.stringify(form));
        localStorage.setItem("selectedTemplateId", selectedId)
        router.push("/template")
    };

    return (
        <div className="w-full py-8 px-4">
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                <Header />
                <div className="flex flex-col gap-6 w-full">
                    {biodataForm.map((sectionData, index) => (
                        <FormSection sectionData={sectionData} key={index} />
                    ))}
                </div>
                <UploadPhoto />

                {/* <Link href={"/format"}> */}
                <Button type="submit" className="mt-5">Submit</Button>
                {/* </Link> */}
            </form>
        </div>
    );
};

export default CreateBiodata;
