"use client";
import React, { useContext, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import dummyData from '../create/dummyBiodata';
import { FormData } from '../create/FormSectionTypes';
import { useImage } from '../Context/ImageContext';



function Template({ backgroundImageSrc = "/images/frame-4.jpg", height }: { backgroundImageSrc?: string, height: any }) {

    const { imgUrl, setImgUrl } = useImage()
    console.log(backgroundImageSrc);

    const formString = localStorage.getItem("form")
    console.log(formString);

    let form: FormData;

    // const parsedForm = JSON.parse(formString || "{}");
    // console.log(parsedForm);

    // form = parsedForm
    try {
        // Parse form data from localStorage
        const parsedForm = JSON.parse(formString || "{}");

        // Use dummyData if parsedForm is empty or invalid
        form = Object.keys(parsedForm).length === 0 ? dummyData : parsedForm;
        console.log("form is **", form);

    } catch {
        // Fallback to dummyData if parsing fails
        form = dummyData;
    }
    console.log(form);

    // if (Object.keys(form).length == 0) return <div>
    //     <h1>No Data Found</h1>
    //     <Button>Select Template</Button>
    // </div>
    console.log("imgUrl is ", imgUrl);

    return (
        <div className={`w-96 mt-3   mx-auto px-8 shadow-lg rounded-lg `} style={{ backgroundImage: `url(${backgroundImageSrc})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: height }}>
            <div className=' text-center mb-2 flex flex-col justify-center items-center w-full ' style={{ fontSize: "10px" }}>
                {form.selectedImage ? (
                    <img
                        src={form.selectedImage}
                        alt="Selected"

                        className="w-12 mt-4"
                    />
                ) : (<img
                    src={"/images/ganapati-bappa/h1.png"}
                    alt="Selected"

                    className="w-12 mt-4"
                />)}
                <h1 className=' font-bold text-orange-600'>{form.titles} </h1>
                <h2 className=' font-semibold'>{form.value}</h2>

            </div>

            <div className='relative w-full  justify-center items-center '>

                {/* {fields.map((field, index) => (
                    <Field key={index} label={field.label} input={field.input} />
                ))} */}
                {
                    imgUrl &&

                    <div className='w-24 h-32  border-2 border-slate-700 absolute top-0 right-0 '>
                        <img src={imgUrl} alt="" className='w-full h-full object-cover' />
                    </div>
                }

                {Object.keys(form).map((key) => {

                    if (key === "selectedImage" || key === "labels") return null;

                    // imgUrl &&




                    const field = form[key];
                    return (

                        <div key={key} className='flex' style={{ fontSize: "10px" }}>
                            <h2 className='w-[25%] ml-5'>{field.label}</h2>
                            <span className='w-[8%]'>:</span>
                            <h2 className='w-[50%]'>{field.input}</h2>
                        </div>
                    );

                })}
            </div>
        </div>
    );
}

export default Template;
