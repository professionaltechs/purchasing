import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// AXIOS
import { auth } from "../components/axios";

const Register = () => {
  const navigate = useNavigate();

  const [userDetils, setUserDeails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    postalCode: "",
  });

  const handleInputChange = (e) => {
    setUserDeails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    for (var inputField in userDetils) {
      if (userDetils[inputField].length === 0) {
        toast.error(`Please fill all the input field.`);
        return;
      }
    }
    try {
      const response = await auth.post("/auth/register-user", userDetils);
      if (response.data.success) {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/email-validation");
        }, 1000);
      } else {
        toast.error("Error registering user. Please try again.");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error(
        error.response.data.message ||
          "Error registering user. Please try again."
      );
    }
  };

  return (
    <>
      <div className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.1)]"></div>
      <div className="grow flex flex-col items-center justify-center z-10">
        <div className="my-16 w-11/12 max-w-xl mx-auto rounded-xl shadow-2xl px-5 py-12 sm:px-6 bg-[#F5F5F5]">
          <h1 className="text-3xl text-center font-semibold lg:text-4xl">
            Register
          </h1>
          <form className="max-w-xl mx-auto mt-10">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm lg:text-lg lg:font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={userDetils.email}
                onChange={handleInputChange}
                required
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
                className="block py-2.5 px-0 w-full text-sm lg:text-lg lg:font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={userDetils.password}
                onChange={handleInputChange}
              />
              <label
                htmlFor="password"
                className="z-10 peer-focus:font-semibold absolute text-xs lg:text-sm text-[#171717] font-medium dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="block py-2.5 px-0 w-full text-sm lg:text-lg lg:font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={userDetils.confirmPassword}
                onChange={handleInputChange}
              />
              <label
                htmlFor="confirmPassword"
                className="z-10 peer-focus:font-semibold absolute text-xs lg:text-sm text-[#171717] font-medium dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm password
              </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="block py-2.5 px-0 w-full text-sm lg:text-lg lg:font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  value={userDetils.firstName}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="firstName"
                  className="z-10 peer-focus:font-semibold absolute text-xs lg:text-sm text-[#171717] font-medium dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="block py-2.5 px-0 w-full text-sm lg:text-lg lg:font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  value={userDetils.lastName}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="lastName"
                  className="z-10 peer-focus:font-semibold absolute text-xs lg:text-sm text-[#171717] font-medium dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
              </div>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="address"
                className="block py-2.5 px-0 w-full text-sm lg:text-lg lg:font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={userDetils.address}
                onChange={handleInputChange}
              />
              <label
                htmlFor="address"
                className="z-10 peer-focus:font-semibold absolute text-xs lg:text-sm text-[#171717] font-medium dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Address
              </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="number"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="block py-2.5 px-0 w-full text-sm lg:text-lg lg:font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  value={userDetils.phoneNumber}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="phoneNumber"
                  className="z-10 peer-focus:font-semibold absolute text-xs lg:text-sm text-[#171717] font-medium dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number (0300-0000000)
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="number"
                  name="postalCode"
                  className="block py-2.5 px-0 w-full text-sm lg:text-lg lg:font-medium text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  value={userDetils.postalCode}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="postalCode"
                  className="z-10 peer-focus:font-semibold absolute text-xs lg:text-sm text-[#171717] font-medium dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3  origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Postal Code
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={(e) => handleRegister(e)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
