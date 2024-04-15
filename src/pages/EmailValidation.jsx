import React from "react";

const EmailValidation = () => {
  return (
    <>
      <div className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.1)]"></div>
      <div className="grow flex flex-col items-center justify-center z-10">
        <div className="my-16 w-11/12 max-w-xl mx-auto rounded-xl shadow-2xl px-5 py-12 sm:px-6 bg-[#F5F5F5]">
          <h1 className="text-3xl text-center font-semibold lg:text-4xl">
            Email Validation
          </h1>
          <form className="max-w-xl mx-auto mt-10">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm lg:text-lg lg:font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="z-10 peer-focus:font-semibold absolute text-xs lg:text-sm text-[#171717] font-medium dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Code
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EmailValidation;
