import { Button, buttonVariants } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Importance from "./_home/Importance";
import TemplateShowcase from "./_home/TemplateShowcase";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-2 md:p-10 my-12  w-full">
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
      {/* template showcase */}
      <TemplateShowcase />
      {/* importance section */}
      <Importance />
    </div>
  );
}
