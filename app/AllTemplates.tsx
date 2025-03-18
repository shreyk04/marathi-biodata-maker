"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { Eye } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

import Link from "next/link";

import { useTemplate } from "./_context/TemplateContext";
import { Templates } from './data';
import { useForm } from './_context/store';


export default function AllTemplates({withPhoto}:{withPhoto: boolean}) {

    
  const {form}=useForm()
  const { selectedId, setSelectedId ,setBackgroundImageSrc} = useTemplate()
  const handleCustomize= (id: any,backgroundImageSrc:string) => {
    setSelectedId(id)
    setBackgroundImageSrc(backgroundImageSrc)
  }
  const handleViewDesign = (id: any) => {
    setSelectedId(id)
    
  }


const isUserFormAvailable=form?.name




  return Templates.filter(template=>template.props.withPhoto==withPhoto).map((template,index) => {
        const TemplateComponentRender = template.component;
        const id = template.id;
        return (
          <div key={index} className="flex flex-col gap-3 justify-center items-center">
            <div className="w-96 h-full mt-10">

              < TemplateComponentRender key={id} {...template.props} form={isUserFormAvailable?form:template.form} />
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center" onClick={() => handleViewDesign(id)}>
                  <span>View Design</span>
                  <span className="ml-2" >
                    <Eye strokeWidth={"1px"} size={"20px"} />
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[505px] h-full max-h-[100vh] overflow-y-auto">
                <DialogHeader>
                  {/* <DialogTitle>With Photo</DialogTitle> */}
                  <DialogDescription>
                    This is how it would look like
                  </DialogDescription>
                </DialogHeader>
                <div className="grid ">
                 
                  <TemplateComponentRender key={id} {...template.props} form={template.form}  />
                </div>
                <Link href={`/create?${selectedId}`} >
                  <Button variant="outline" className="flex items-center" onClick={()=>handleCustomize(id,template.props.backgroundImageSrc)}>
                    <span>Customize</span>
                  </Button>
                </Link>
              </DialogContent>

            </Dialog>
          </div>

        )
      }
  )
}
