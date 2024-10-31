"use client";
import { LanguageContext } from "@/contexts/LanguageContext";
import Link from "next/link";
import { useContext } from "react";

const Navbar = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div className="px-24 py-4 bg-slate-200 flex flex-row justify-between items-center">
      <h1 className="font-semibold text-xl text-black">LOGO</h1>
      <div className="flex flex-row gap-4">
        <input
          type="text"
          className="rounded-full border border-slate-300 p-2 text-sm text-black"
          placeholder="Search"
        />
        <span className="uppercase border border-slate-300 p-1 mx-2 rounded-md text-slate-500">
          {language}
        </span>
        <select
          className="bg-transparent text-slate-500 text-sm"
          value={language}
          onChange={(e: any) => setLanguage(e.target.value)}
        >
          <option value="en">English (United States)</option>
          <option value="id">Bahasa Indonesia</option>
        </select>
        <div className="flex flex-row gap-2">
          <button
            type="button"
            className="bg-gray-500 rounded-md p-2 text-white shadow-md"
          >
            Sign Up
          </button>
          <button
            type="button"
            className="bg-gray-700 rounded-md p-2 text-white shadow-md"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
