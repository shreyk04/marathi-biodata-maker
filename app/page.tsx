"use client"
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Importance from "./_home/Importance";
import AllTemplates from "./AllTemplates";
import { useState } from "react";
import Footer from "./_home/Footer";

export default function Home() {
  const [isWithPhotoFilterActive, setIsWithPhotoFilterActive] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center p-2 my-12 w-full">
      {/* Top Section */}
      <>
        <h1 className="text-[2.8rem] md:text-5xl text-[#AE1438] font-semibold my-5 opacity-95">
          Unique Marathi Biodata Creator
        </h1>
        <p className="flex flex-col gap-1 text-xl text-center my-3">
          <span className="text-center text-muted-foreground">
            Effortlessly generate a well-structured and professional marriage biodata in Marathi.
          </span>
          <span className="text-muted-foreground">
            Customize details, download instantly, and share with ease.
          </span>
        </p>
        <div className="flex flex-col items-center justify-center gap-2 my-12">
          <h3 className="text-2xl font-medium text-muted-foreground">
            तुम्हाला कोणत्या प्रकारचा बायोडाटा हवा आहे?
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-5 my-2">
            <Button 
              variant={isWithPhotoFilterActive ? "default" : "outline"} 
              onClick={() => setIsWithPhotoFilterActive(true)}
            >
              <span>फोटोसह बायोडाटा</span>
              <MoveRight className="ml-2" />
            </Button>
            <Button 
              variant={!isWithPhotoFilterActive ? "default" : "outline"} 
              onClick={() => setIsWithPhotoFilterActive(false)}
            >
              <span>फोटोशिवाय बायोडाटा</span>
              <MoveRight className="ml-2" />
            </Button>
          </div>
        </div>
      </>
      {/* Templates Section */}
      <div className="flex justify-around gap-2 w-full flex-wrap">
        <AllTemplates withPhoto={isWithPhotoFilterActive} />
      </div>
      {/* Additional Information */}
      <Importance />
      <Footer/>
    </div>
  );
}
