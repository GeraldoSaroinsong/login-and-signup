"use client";

import FormInput from "@/components/InputForm";

const Login = () => {
  return (
    <div>
      <div className="w-1/2 m-auto p-4 flex flex-row items-center">
        <div className="p-6 text-wrap">
          <h1 className="font-semibold text-3xl my-4">Design with us</h1>
          <p className="font-thin text-lg">
            Access to thousands of design resources and templates
          </p>
        </div>
        <div className="w-3/4 px-14 py-6 m-auto border flex flex-row bg-slate-200 rounded-xl">
          <div className="flex flex-col m-2 gap-4 text-sm">
            <h2 className="font-semibold text-gray-600 text-xl">Log-In</h2>
            <FormInput type="text" label="E-Mail Address" />
            <div>
              <FormInput type="password" label="Password" />
            </div>
            <div className="flex flex-row gap-6 mt-4 items-center">
              <button
                type="button"
                className="py-2 px-6 bg-gray-400 text-white rounded-full shadow-md"
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
