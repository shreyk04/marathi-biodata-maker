import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className=" bg-zinc-50 shadow-md flex justify-between p-1 text-[#AE1438]">
      <Link href="/" className="logo text-[#AE1438] p-2 rounded-sm">
      Unique Marathi Biodata Creator      </Link>
      <div className="nav-items hidden sm:flex text-secondary font-light  items-center gap-4">
        <Link href={"/"} className={cn(buttonVariants({ variant: "link" }))}>
          Home
        </Link>
        <Link href={"/"} className={cn(buttonVariants({ variant: "link" }))}>
          Contact Us
        </Link>
        {/* <Link href={"/"} className={cn(buttonVariants({ variant: "link" }))}>
          Search By Religion
        </Link> */}
      </div>
      <div className="sm:hidden flex  items-center">
        <Menu />
      </div>
    </nav>
  );
}

export default Navbar;
