"use client";

import FormInput from "@/components/InputForm";
import { callAPI } from "../../config/axios";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSignIn = async () => {
    try {
      const response = await callAPI.get(
        `/users?email=${email}&password=${password}`
      );
      console.log("Check sign in response :", response.data);
      localStorage.setItem("dataUser", JSON.stringify(response.data[0])); // gunakan JSON.stringify untuk mengubah data menjadi tipe data string
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="mx-auto my-20 py-4 flex sm:flex-col xl:w-1/2 xl:flex-row xl:items-center">
        <div className="p-6 text-wrap sm:w-3/4 sm:m-auto sm:text-center xl:text-left">
          <h1 className="font-semibold text-3xl my-4">Design with us</h1>
          <p className="font-thin text-lg">
            Access to thousands of design resources and templates
          </p>
        </div>
        <div className="w-3/4 px-14 py-6 m-auto border flex flex-row bg-slate-200 rounded-xl">
          <div className="flex flex-col m-2 gap-4 text-sm">
            <h2 className="font-semibold text-gray-600 text-xl">Log-In</h2>
            <FormInput
              type="text"
              label="E-Mail Address"
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
            />
            <FormInput
              type="password"
              label="Password"
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
            />
            <div className="flex flex-row gap-6 mt-4 items-center">
              <button
                type="button"
                className="py-2 px-6 bg-gray-400 text-white rounded-full shadow-md"
                onClick={onSignIn}
              >
                Log-in
              </button>
              <p className="text-gray-900">
                Don't have an account?{" "}
                <a href="./signup" className="underline">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
