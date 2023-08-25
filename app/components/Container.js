"use client";

import React from "react";

const Container = ({ children }) => {
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center be-fixed bg-cover">
      {/*"bg-black w-full h-full lg:bg-opacity-50"  this means large = lg screen opacity-50   and when it gets small becomes bg-black  */}
      <div className="bg-black w-full h-full lg:bg-opacity-50 flex flex-row items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Container;
