"use client";
import React, { useContext, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';



function Template({ backgroundImageSrc = "/images/frame-4.jpg", height }: { backgroundImageSrc?: string, height: any }) {

    console.log(backgroundImageSrc);
    // const [fontSize, setFontSize] = useState("")
    // if (height < 100) {
    //     setFontSize("12px")
    // } else {
    //     setFontSize("24px")
    // }
    const formString = localStorage.getItem("form") || "{}";
    const form = JSON.parse(formString);
    console.log(form);

    if (Object.keys(form).length == 0) return <div>
        <h1>No Data Found</h1>
        <Button>Select Template</Button>
    </div>

    return (
        <div className={`w-96 mt-3   mx-auto p-4 shadow-lg rounded-lg `} style={{ backgroundImage: `url(${backgroundImageSrc})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: height }}>
            <div className='text-center mb-2 flex flex-col justify-center items-center w-full ' style={{ fontSize: "10px" }}>
                {form.selectedImage && (
                    <img
                        src={form.selectedImage}
                        alt="Selected"

                        className="w-12"
                    />
                )}
                {/* <h1 className=' font-bold text-orange-600'>श्री गणेशाय नमः </h1>
                <h2 className=' font-semibold'>बायोडाटा</h2> */}
            </div>

            <div className='w-full  justify-center items-center'>

                {/* {fields.map((field, index) => (
                    <Field key={index} label={field.label} input={field.input} />
                ))} */}

                {Object.keys(form).map((key) => (
                    <>

                        <div key={key} className='flex     ' style={{ fontSize: "9px" }} >
                            <h2 className='w-[40%] ml-9 '>{form[key].label}</h2>
                            <span className='w-[10%]'>:</span>
                            <h2 className='w-[50%]'>{form[key].input}</h2>
                        </div>
                    </>
                    // <p key={key}>{`${form[key].label}: ${form[key].input}`}</p>
                ))}
            </div>
        </div>
    );
}

export default Template;
