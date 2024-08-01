"use client";
import React, { useContext, useEffect } from 'react';
import { FormContext, useForm } from '../Context/store';
import { Button } from '@/components/ui/button';
import { url } from 'inspector';

const Field = ({ label, input }: { label: string, input: string }) => {
    return (
        <div className='w-full flex justify-between'>
            <span className='text-xs font-semibold  w-[30%]'>{label}</span>
            <span>:</span>
            <span className='w-[70%]'>{input}</span>
        </div>
    )
}

function Format({ color }: { color?: string }) {

    console.log(color);

    const formString = localStorage.getItem("form") || "{}";
    const form = JSON.parse(formString);
    console.log(form);

    if (Object.keys(form).length == 0) return <div>
        <h1>No Data Found</h1>
        <Button>Select Template</Button>
    </div>

    return (
        <div className={`w-96 h-screen  max-w-xl mx-auto p-4 shadow-lg rounded-lg `} style={{ background: `url("images/frame-4.jpg")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className='text-center mb-2 flex flex-col justify-center items-center w-full '>
                {form.selectedImage && (
                    <img
                        src={form.selectedImage}
                        alt="Selected"

                        className="w-12"
                    />
                )}
                <h1 className='text-base font-bold text-orange-600'>श्री गणेशाय नमः </h1>
                <h2 className='text-base font-semibold'>बायोडाटा</h2>
            </div>

            <div className='w-full flex flex-col justify-center items-center'>

                {/* {fields.map((field, index) => (
                    <Field key={index} label={field.label} input={field.input} />
                ))} */}

                {Object.keys(form).map((key) => (
                    <>

                        <div key={key} className='flex w-full text-xs'>
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

export default Format;
