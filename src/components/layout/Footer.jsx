import React from "react";

// ICONS
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#120059] pt-14 pb-8 lg:pt-12">
      <div className="flex justify-evenly max-w-sm m-auto px-4 lg:max-w-xl">
        <div className="flex items-center justify-center min-w-12 min-h-12 lg:min-w-14 lg:min-h-14 bg-white hover:bg-[#fed700] rounded-full cursor-pointer lg:text-2xl ">
          <FaFacebookF />
        </div>
        <div className="flex items-center justify-center min-w-12 min-h-12 lg:min-w-14 lg:min-h-14 bg-white hover:bg-[#fed700] rounded-full cursor-pointer lg:text-2xl">
          <FaInstagram />
        </div>
        <div className="flex items-center justify-center min-w-12 min-h-12 lg:min-w-14 lg:min-h-14 bg-white hover:bg-[#fed700] rounded-full cursor-pointer lg:text-2xl">
          <FaXTwitter />
        </div>
        <div className="flex items-center justify-center min-w-12 min-h-12 lg:min-w-14 lg:min-h-14 bg-white hover:bg-[#fed700] rounded-full cursor-pointer lg:text-2xl">
          <FaYoutube />
        </div>
      </div>
      <div className="flex justify-evenly max-w-sm m-auto text-white  mt-6 px-4 lg:max-w-xl">
        <p className="hover:text-[#fed700] cursor-pointer">About Us</p>
        <p className="hover:text-[#fed700] cursor-pointer">Latest News</p>
        <p className="hover:text-[#fed700] cursor-pointer">FAQ</p>
        <p className="hover:text-[#fed700] cursor-pointer">Contact Us</p>
      </div>
      <p className="mt-10 text-center text-white text-xs ">
        ALL RIGHTS RESERVED.{" "}
      </p>
    </div>
  );
};

export default Footer;
