"use client"
import { Button, buttonVariants } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Importance from "./_home/Importance";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Template from "./template/page";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import { useTemplate } from "./Context/TemplateContext";
export const Templates = {
  "template1": {
    id: 1,
    component: Template,
    props: { backgroundImageSrc: "/images/bg2.jpg", height: "550px" },
  },
  "template2": {
    id: 2,

    component: Template,
    props: { backgroundImageSrc: "/images/frame-2.jpg", height: "550px" }
  },
  "template3": {
    id: 3,

    component: Template,
    props: { backgroundImageSrc: "/images/frame-10.jpg", height: "550px" }
  },
  "template4": {
    id: 4,

    component: Template,
    props: { backgroundImageSrc: "/images/frame-4.jpg", height: "550px" }
  },
  "template5": {
    id: 5,

    component: Template,
    props: { backgroundImageSrc: "/images/frame-5.jpg", height: "550px" }
  },
  "template6": {
    id: 6,

    component: Template,
    props: { backgroundImageSrc: "/images/frame-6.jpg", height: "550px" }
  },
  "template7": {
    id: 7,

    component: Template,
    props: { backgroundImageSrc: "/images/frame-7.jpg", height: "550px" }
  },
  "template8": {
    id: 8,

    component: Template,
    props: { backgroundImageSrc: "/images/frame-8.jpg", height: "550px" }
  },
  "template9": {
    id: 9,

    component: Template,
    props: { backgroundImageSrc: "/images/frame-9.jpg", height: "550px" }
  },

}

export default function Home() {

  // return <Templates.template1.component  {...Templates.template1.props} />
  // return (
  //   Object.entries(Templates).map(([key, template]) => {
  //     const Component = template.component;
  //     return <Component key={key} {...template.props} />
  //   })
  // )

  const { selectedId, setSelectedId } = useTemplate()
  const handleClick = (id: any) => {
    setSelectedId(id)
    console.log(selectedId);

  }

  return (
    <div className="flex flex-col justify-center items-center p-2  my-12   w-full">
      {/* top section */}
      <>
        <h1 className="text-[2.8rem] md:text-5xl text-primary font-semibold my-5 opacity-95">
          Marathi Biodata Maker
        </h1>
        <p className="flex flex-col gap-1 text-xl text-center my-3">
          <span className="text-center text-muted-foreground">
            Create and download bio data for marriage in Marathi to get up to 4x
            responses.
          </span>
          <span className="text-muted-foreground">
            Customize, download, print & send online.
          </span>
        </p>
        <div className="flex flex-col items-center justify-center gap-2 my-12">
          <h3 className="text-2xl font-medium text-muted-foreground">
            आपणांस बायोडाटा कसा तयार करायचा आहे?
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-5 my-2">
            <Link href={"/create"} className={cn(buttonVariants())}>
              <span>फोटो सोबत</span>
              <span>
                <MoveRight className="ml-2" />
              </span>
            </Link>
            <Button>
              <span>फोटो शिवाय</span>
              <span>
                <MoveRight className="ml-2" />
              </span>
            </Button>
          </div>
        </div>
      </>
      <div className="flex justify-around gap-2 w-full  flex-wrap ">

        {Object.entries(Templates).map(([key, template]) => {
          const Component = template.component;
          const id = template.id;
          return (
            <div className="flex flex-col gap-3 justify-center items-center">
              <div className="w-96 h-full mt-10">

                < Component key={key} {...template.props} />
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex items-center" onClick={() => handleClick(id)}>
                    <span>View Design</span>
                    <span className="ml-2" >
                      <Eye strokeWidth={"1px"} size={"20px"} />
                    </span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[505px] h-full ">
                  <DialogHeader>
                    {/* <DialogTitle>With Photo</DialogTitle> */}
                    <DialogDescription>
                      This is how it would look like
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    {/* <img
                      className="w-full h-full mb-4 shadow-lg rounded-md"
                      src="https://marathibiodatamaker.com/images/formats/marathi-biodata-maker.webp"
                      alt=""
                    /> */}
                    < Component key={key} {...template.props} />

                  </div>
                  <Link href={"/create"} >
                    <Button variant="outline" className="flex items-center"  >
                      <span>Customize</span>

                    </Button>
                  </Link>


                </DialogContent>
              </Dialog>
            </div>

          )
        })}


      </div>
      {/* <Format /> */}

      {/* importance section */}
      <Importance />
    </div>
  );
}


/* eslint-disable no-unused-vars */