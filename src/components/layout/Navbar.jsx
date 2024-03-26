import React from "react";

// ICONS
import { IoIosMenu } from "react-icons/io";
import { BsCreditCard } from "react-icons/bs";
import { MdLogin } from "react-icons/md";
import { FaUserPlus, FaOpencart } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 px-6 md:py-6 md:px-10 lg:py-8 lg:px-14 bg-[#120059] text-white">
      <h1 className="text-3xl">LOGO</h1>
      <IoIosMenu className="md:hidden" />
      <div className="hidden md:flex items-center gap-7 lg:gap-12">
        <div className="flex items-center gap-2 cursor-pointer hover:text-[#fed700]">
          <BsCreditCard className="lg:text-xl" />
          <p>Buy Now</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-[#fed700]">
          <MdLogin className="lg:text-xl" />
          <p>Login</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-[#fed700]">
          <FaUserPlus className="lg:text-xl" />
          <p>Register</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:text-[#fed700]">
          <FaOpencart  className="lg:text-xl" />
          <p>Cart </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
