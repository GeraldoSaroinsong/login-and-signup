"use client";

import FormInput from "@/components/InputForm";
import { callAPI } from "@/config/axios";
import { useState } from "react";
import { CgPassword } from "react-icons/cg";

const Login = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const onSignUp = async () => {
    if (confirmPassword === password) {
      try {
        const res = await callAPI.post("/users", {
          name: `${firstName} ${lastName}`,
          email: { email },
          password: { password },
        });
        alert("Sign Up Complete!");
        console.log("Check sign up response :", res.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Passwords don't match!");
    }
  };

  return (
    <div>
      <div className="mx-auto my-20 py-4 flex sm:flex-col sm:xl:w-1/2 xl:flex-row xl:items-center">
        <div className="p-6 text-wrap sm:w-3/4 sm:m-auto sm:text-center xl:text-left">
          <h1 className="font-semibold text-3xl my-4">Design with us</h1>
          <p className="font-thin text-lg">
            Access to thousands of design resources and templates
          </p>
        </div>
        <div className="w-3/4 px-14 py-6 m-auto border flex flex-row bg-slate-200 rounded-xl">
          <div className="flex flex-col m-2 gap-4 text-sm">
            <h2 className="font-semibold text-gray-600 text-xl">Sign-Up Now</h2>
            <div className="grid grid-cols-2 gap-4">
              <FormInput
                type="text"
                label="First Name"
                onChange={(e: any) => {
                  setFirstName(e.target.value);
                }}
              />
              <FormInput
                type="text"
                label="Last Name"
                onChange={(e: any) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <FormInput
              type="text"
              label="E-Mail Address"
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
            />
            <div>
              <FormInput
                type="password"
                label="Password"
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
              />
              <p className="text-xs my-1 text-gray-600">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>
            </div>
            <FormInput
              type="password"
              label="Confirm Password"
              onChange={(e: any) => {
                setConfirmPassword(e.target.value);
              }}
            />
            {/* <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2">
                <input type="checkbox" />
                <p className="text-gray-900">
                  By creating an account, I agree to the{" "}
                  <a href="#">Terms of use</a> and{" "}
                  <a href="#">Privacy Policy</a>.
                </p>
              </div>
              <div className="flex flex-row gap-2">
                <input type="checkbox" />
                <p className="text-gray-900">
                  By creating an account, I am also consenting to recieve SMS
                  messages and e-mails, including products, new feature updates,
                  events and marketing promotions.
                </p>
              </div>
            </div> */}
            <div className="flex flex-row gap-6 mt-4 items-center">
              <button
                type="button"
                className="py-2 px-6 bg-gray-400 text-white rounded-full shadow-md"
                onClick={onSignUp}
              >
                Sign Up
              </button>
              <p className="text-gray-900">
                Already have an account?{" "}
                <a href="./login" className="underline">
                  Log in
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
