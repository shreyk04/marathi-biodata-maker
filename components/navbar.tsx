import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className=" bg-zinc-50 shadow-md flex justify-between p-1">
      <Link href="/" className="logo text-primary p-2 rounded-sm">
        MARATHI BIODATA MAKER
      </Link>
      <div className="nav-items hidden sm:flex text-secondary font-light  items-center gap-4">
        <Link href={"/"} className={cn(buttonVariants({ variant: "link" }))}>
          Home
        </Link>
        <Link href={"/"} className={cn(buttonVariants({ variant: "link" }))}>
          Contact Us
        </Link>
        <Link href={"/"} className={cn(buttonVariants({ variant: "link" }))}>
          Search By Religion
        </Link>
      </div>
      <div className="sm:hidden flex  items-center">
        {/* <img class=" w-6 h-6 mr-4 cursor-pointer" src="./public/img/icons8-search-50 (1).png" alt=""/> */}
        <Menu />
      </div>
    </nav>
  );
}

export default Navbar;
