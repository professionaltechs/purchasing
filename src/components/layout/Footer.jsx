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
    <div className="bg-[#120059] pt-10 pb-4 lg:pt-12">
      <div className="flex flex-col gap-5 lg:gap-7 md:flex-row max-w-5xl mx-auto">
        <div className="flex justify-evenly max-w-sm m-auto px-4 w-11/12 lg:max-w-xl">
          <div className="flex items-center justify-center min-w-12 min-h-12 lg:min-w-14 lg:min-h-14 text-[#FFFFFF] hover:text-[#fed700] rounded-full cursor-pointer text-xl lg:text-3xl">
            <FaInstagram />
          </div>
          <div className="flex items-center justify-center min-w-12 min-h-12 lg:min-w-14 lg:min-h-14 text-[#FFFFFF] hover:text-[#fed700] rounded-full cursor-pointer text-xl lg:text-3xl">
            <FaFacebookF />
          </div>
          <div className="flex items-center justify-center min-w-12 min-h-12 lg:min-w-14 lg:min-h-14 text-[#FFFFFF] hover:text-[#fed700] rounded-full cursor-pointer text-xl lg:text-3xl">
            <FaXTwitter />
          </div>
          <div className="flex items-center justify-center min-w-12 min-h-12 lg:min-w-14 lg:min-h-14 text-[#FFFFFF] hover:text-[#fed700] rounded-full cursor-pointer text-xl lg:text-3xl">
            <FaYoutube />
          </div>
        </div>
        <div className="flex justify-evenly max-w-sm m-auto text-white px-4 w-11/12 lg:max-w-xl">
          <p className="hover:text-[#fed700] cursor-pointer">About Us</p>
          <p className="hover:text-[#fed700] cursor-pointer">Latest News</p>
          <p className="hover:text-[#fed700] cursor-pointer">FAQ</p>
          <p className="hover:text-[#fed700] cursor-pointer">Contact Us</p>
        </div>
      </div>
      <p className="mt-10 text-center text-white text-xs ">
        ALL RIGHTS RESERVED.{" "}
      </p>
    </div>
  );
};

export default Footer;
