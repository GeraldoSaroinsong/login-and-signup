"use client";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

interface IFormInput {
  type: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  ref?: any;
}

const FormInput: React.FC<IFormInput> = ({
  type,
  label,
  placeholder,
  onChange,
  ref,
}) => {
  if (type === "password") {
    const [status, setStatus] = useState<boolean>(false);

    const reveal = () => {
      setStatus(!status);
    };

    return (
      <div className="flex flex-col gap-0.25 text-gray-700">
        <label className="font-medium text-sm">{label}</label>
        <div className="flex flex-row relative">
          <input
            ref={ref}
            type={status ? "text" : "password"}
            placeholder={placeholder}
            className="border p-2 rounded-md shadow-md bg-white w-full"
            onChange={onChange}
          />
          <button
            className="p-2 bg-white absolute right-1 top-1"
            onClick={reveal}
          >
            {!status ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-0.25 text-gray-700">
      <label className="font-medium text-sm">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border p-2 rounded-md shadow-md bg-white"
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
