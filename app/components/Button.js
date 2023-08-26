"use client";

import React from "react";

const Button = ({ onClick, disabled, primary, secondary, label, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`text-white rounded-md  w-24 h-8 hover:opacity-50  cursor-pointer mr-2 opacity-80
      ${primary ? "bg-red-600" : "bg-green-500"} `}
    >
      {label}
    </button>
  );
};

export default Button;
