"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import firstData from "../create/dummyBiodata";
import { FormData } from "../create/FormSectionTypes";
import { useImage } from "../_context/ImageContext";
import { useForm } from "../_context/store";
import { useTemplate } from "../_context/TemplateContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRouter } from "next/navigation";

function TemplateRender({
  backgroundImageSrc,
  height,
  left_offset,
  withPhoto,
  isFinal = false,
  form,
}: {
  backgroundImageSrc: string;
  height: string;
  left_offset: string;
  withPhoto?: boolean;
  isFinal?: boolean;
  form: any;
}) {
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);
  const router = useRouter();

  // this is working fine when width is greater than height
  const [isPortait, setIsPortait] = useState(window.innerHeight > window.innerWidth);
  console.log("isPortait", isPortait);

  

  const dimensionsStyle = {
        height: isPortait ? "unset" :"80vh",
        width: isPortait ? "80vw" :"unset",
      };

  
  const handleResize = ()=>{
    setIsPortait(window.innerHeight > window.innerWidth);
  }

  // const uploadedPhoto = localStorage.getItem("uploadedImage") || "";

  useEffect(() => {
    const savedImage = localStorage.getItem("uploadedImage");

    if (savedImage) {
      setUploadedPhoto(savedImage);
    }
  }, []);


  useEffect(()=>{

    window.addEventListener("resize",handleResize);
    
    return ()=>{
      window.removeEventListener("resize",handleResize);
    }

  },[])

  const templateRef = useRef<HTMLDivElement>(null);

  // 📌 Function to download as IMAGE
  const handleDownloadImage = async () => {
    if (!templateRef.current) return;

    const canvas = await html2canvas(templateRef.current, {
      scale: 2, // Higher scale for better quality
      useCORS: true, // Allows loading external images
    });

    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "biodata.png";
    link.click();
  };

  // 📌 Function to download as PDF
  const handleDownloadPDF = async () => {
    if (!templateRef.current) return;

    const canvas = await html2canvas(templateRef.current, {
      scale: 2,
      useCORS: true,
    });

    const image = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4"); // Portrait mode, millimeters, A4 size
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

    pdf.addImage(image, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("biodata.pdf");
  };

  const handleBackOption = () => {
    router.push("/create");
  };

  if (!form) {
    return <h1>No data found</h1>;
  }
  console.log(form);

  

  return (
    <div
      className={`aspect-[0.7] relative bg-red-100 top-0  mx-auto px-8  rounded-lg `}
      ref={templateRef}
      style={{
        ...dimensionsStyle,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <img
        style={dimensionsStyle}
        src={backgroundImageSrc} className="aspect-[0.7]"/>
      </div>
      <div className={`  h-full w-full ${form.selectedImage?"pt-0":"pt-10"} `}>
        {withPhoto && (
          <div
            className={`absolute top-[20%] right-[80px] border ${
              !uploadedPhoto ? "border border-red-300" : ""
            }  bg-slate-100 backdrop-opacity-55 shadow-sm w-[10%] h-[10%]`}
            style={{
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <img
              src={uploadedPhoto || "/images/avatar-profile-icon.jpg"}
              className="w-full h-full"
              alt=""
            />
          </div>
        )}
        <div
          className=" text-center  flex flex-col justify-center items-center w-full "
          style={{ fontSize: "10px" }}
        >
          {form.selectedImage && (
            <img
              src={form.selectedImage}
              alt="Selected"
              className="w-12 mt-8"
            />
          )}

          <h1 className=" font-bold text-orange-600 my-2">{form.title} </h1>
          {/* <h2 className=' font-semibold'>{form.value}</h2> */}
        </div>

        <div className={`relative  w-full  justify-center items-center `}>
          {/* {fields.map((field, index) => (
                    <Field key={index} label={field.label} input={field.input} />
                ))} */}
          {/* {
                    imgUrl &&

                    <div className=*'w-24 h-32  border-2 border-slate-700 absolute top-0 right-0 '>
                        <img src={imgUrl} alt="" className='w-full h-full object-cover' />
                    </div>
                } */}

          {Object.keys(form).map((key) => {
            const field = form[key];

            if (!field) return null;
            if (!field.label || !field.input) return null;

            return (
              <div
                key={key}
                className="flex text-[7px] "
                style={{ paddingLeft: left_offset }}
              >
                <h2 className="w-[25%] ml-5 ">{field.label}</h2>
                <span className="w-[8%]">:</span>
                <h2 className="w-[50%]">{field.input}</h2>
              </div>
            );
          })}
        </div>

        {isFinal && (
          <div className="flex gap-4 mt-5 absolute  bottom-[-10%] left-[0%] ">
            <Button onClick={handleBackOption}>Back</Button>
            <Button onClick={handleDownloadImage}>Download as Image</Button>
            <Button onClick={handleDownloadPDF}>Download as PDF</Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TemplateRender;
