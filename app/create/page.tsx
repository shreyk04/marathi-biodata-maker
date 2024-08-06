"use client";

import React from "react";
import CreateBiodata from "./CreateBiodata";
import { FormProvider } from "../Context/store";

const Page = () => {
  return (
    <FormProvider>

      <CreateBiodata />
    </FormProvider>
  );
};

export default Page;
