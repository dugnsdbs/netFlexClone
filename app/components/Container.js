"use client";

import React from "react";

const Container = ({ children }) => {
  return (
    <div className="bg-zinc-900 w-full h-full lg:bg-opacity-50 flex flex-col ">
      {children}
    </div>
  );
};

export default Container;
