import React, { useState } from "react";
import toast from "react-hot-toast";

import { auth } from "../components/axios";

const Login = () => {
  const [inputDetails, setInputDetails] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    setInputDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    for (var inputField in inputDetails) {
      if (inputDetails[inputField].length === 0) {
        toast.error(`Please fill all the input field.`);
        return;
      }
    }
    try {
      const response = await auth.post("/auth/sign-in", inputDetails);
      if (response.data.success) {
        toast.success("Login successful!");
      } else {
        toast.error("Error Occured. Please try again.");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response.data.message || "Error logging in. Please try again."
      );
    }
  };

  return (
    <>
      <div className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.1)] z-10"></div>
      <div className="my-16 w-11/12 max-w-lg mx-auto rounded-xl shadow-2xl px-5 py-20 sm:px-6 bg-[#F5F5F5] z-10">
        <h1 className="text-3xl text-center font-semibold lg:text-4xl">
          Login
        </h1>
        <form className="max-w-lg mx-auto mt-10">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm lg:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={inputDetails.email}
              onChange={(e) => handleInputChange(e)}
            />
            <label
              htmlFor="email"
              className="z-10 peer-focus:font-semibold absolute text-xs lg:text-sm text-[#171717] font-medium dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full text-sm lg:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={inputDetails.password}
              onChange={(e) => handleInputChange(e)}
            />
            <label
              htmlFor="password"
              className="z-10 peer-focus:font-semibold absolute text-xs lg:text-sm text-[#171717] font-medium dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={(e) => handleSubmit(e)}
          >
            Log in
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
