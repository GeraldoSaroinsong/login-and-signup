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
          {/* <div className="flex flex-col border border-blue-500 h-fit self-auto">
          <h1 className="font-semibold text-4xl my-2">Design with us</h1>
          <p>Access to thousands of design resources and templates</p>
        </div> */}
          <div className="flex flex-col m-2 gap-4 text-sm">
            <h2 className="font-semibold text-gray-600 text-xl">Sign-Up Now</h2>
            <div className="grid grid-cols-2 gap-4">
              <FormInput type="text" label="First Name" />
              <FormInput type="text" label="Last Name" />
            </div>
            <FormInput type="text" label="E-Mail Address" />
            <FormInput type="number" label="Phone Number" placeholder="+62" />
            <div>
              <FormInput type="password" label="Password" />
              <p className="text-xs my-1 text-gray-600">
                Use 8 or more characters with a mix of letters, numbers, &
                symbols
              </p>
            </div>
            <div className="flex flex-col gap-4">
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
            </div>
            <div className="flex flex-row gap-6 mt-4 items-center">
              <button
                type="button"
                className="py-2 px-6 bg-gray-400 text-white rounded-full shadow-md"
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
