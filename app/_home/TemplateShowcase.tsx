import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";

function Template() {
  return (
    <>
      <div className="w-full max-w-xs flex flex-col items-center justify-between">
        <img
          className="w-full mb-4 shadow-lg rounded-md"
          src="https://marathibiodatamaker.com/images/formats/marathi-biodata-maker.webp"
          alt=""
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center">
              <span>View Design</span>
              <span className="ml-2">
                <Eye strokeWidth={"1px"} size={"20px"} />
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>With Photo</DialogTitle>
              <DialogDescription>
                This is how it would look like
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <img
                className="w-full h-full mb-4 shadow-lg rounded-md"
                src="https://marathibiodatamaker.com/images/formats/marathi-biodata-maker.webp"
                alt=""
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

function TemplateShowcase() {
  return (
    <div className="flex flex-col gap-8 my-10">
      {Array.from([1, 2]).map((i) => (
        <div key={i} className="flex flex-col items-center gap-2 w-full">
          <h1 className="font-bold text-2xl text-primary">
            फोटो सोबत बायोडाटा
          </h1>
          <h4 className="text-center text-muted-foreground">
            बायोडाटा वरती मुलाचा किंवा मुलीचा फोटो असणाऱ्या फॉर्मट मध्ये
            बायोडाटा बनवा.
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 my-5 w-full items-center justify-center">
            <Template />
            <Template />
            <Template />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TemplateShowcase;
