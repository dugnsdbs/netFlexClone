"use client";

import Image from "next/image";
import React from "react";
import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      <Image className="h-4 lg:h-7" src="/images/logo.png" alt="Logo" />
      <PuffLoader size={100} color="red" />
    </div>
  );
};

export default Loader;
