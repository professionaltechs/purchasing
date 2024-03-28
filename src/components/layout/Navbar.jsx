import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ICONS
import { IoIosMenu } from "react-icons/io";
import { BsCreditCard } from "react-icons/bs";
import { MdLogin } from "react-icons/md";
import { FaUserPlus, FaOpencart } from "react-icons/fa6";

// ICONS
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  // SCROLL ANIMATION
  var lastScrollTop = 0;
  let stikyValue;

  const scrollAnimation = () => {
    const animatingElement =
      document.getElementsByClassName("navbarDropDowns")[0];
    const maxValue =
      document.getElementsByClassName("navbarTop")[0].clientHeight;
    const minValue =
      document.getElementsByClassName("navbarTop")[0].clientHeight -
      animatingElement.clientHeight;
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      if (stikyValue > minValue) {
        stikyValue -= 2;
        animatingElement.style.top = stikyValue + "px";
      }
    } else if (st < lastScrollTop) {
      if (stikyValue < maxValue) {
        stikyValue += 2;
      }
      animatingElement.style.top = stikyValue + "px";
    }
    lastScrollTop = st <= 0 ? 0 : st;
  };

  const handleNavbarPosition = () => {
    const requiredStickyValue =
      document.getElementsByClassName("navbarTop")[0].clientHeight;
    stikyValue = requiredStickyValue;
    document.getElementsByClassName("navbarDropDowns")[0].style.top =
      requiredStickyValue + "px";
  };

  useEffect(() => {
    const requiredStickyValue =
      document.getElementsByClassName("navbarTop")[0].clientHeight;
    stikyValue = requiredStickyValue;
    document.getElementsByClassName("navbarDropDowns")[0].style.top =
      requiredStickyValue + "px";
    document.addEventListener("scroll", scrollAnimation);
    window.addEventListener("resize", handleNavbarPosition);
    return () => {
      document.removeEventListener("scroll", scrollAnimation);
      window.removeEventListener("resize", handleNavbarPosition);
    };
  }, []);

  // ACTIVE DROPDOWN
  const [activeDropDown, setActiveDropDown] = useState();

  return (
    <>
      <div className="navbarTop flex items-center justify-between bg-[#120059]  text-white sticky top-0 z-50 py-4 px-6 md:py-6 md:px-10 lg:py-8 lg:px-14 ">
        <Link to="/" className="text-3xl">
          LOGO
        </Link>
        <IoIosMenu className="md:hidden" />
        <div className="hidden md:flex items-center gap-7 lg:gap-12">
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#fed700]">
            <BsCreditCard className="lg:text-xl" />
            <p>Buy Now</p>
          </div>
          <Link
            to="/login"
            className="flex items-center gap-2 cursor-pointer hover:text-[#fed700]"
          >
            <MdLogin className="lg:text-xl" />
            <p>Login</p>
          </Link>
          <Link
            to="/register"
            className="flex items-center gap-2 cursor-pointer hover:text-[#fed700]"
          >
            <FaUserPlus className="lg:text-xl" />
            <p>Register</p>
          </Link>
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#fed700]">
            <FaOpencart className="lg:text-xl" />
            <p>Cart </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block navbarDropDowns sticky py-3 z-40 bg-[#F5F5F5]">
        <div className="flex w-11/12 max-w-6xl justify-between mx-auto font-medium">
          <div className="flex items-center gap-7 lg:gap-10">
            <div
              className={`dropDowns flex items-center gap-2 relative ${
                activeDropDown == 1 ? "activeElement" : ""
              }`}
              onMouseEnter={() => setActiveDropDown(1)}
              onMouseLeave={() => setActiveDropDown()}
            >
              <p>PLAY</p>
              <FaAngleDown />
              <div
                className={`absolute top-full left-0 py-4 ${
                  activeDropDown == 1 ? "block" : "hidden"
                }`}
              >
                <div className="w-max flex flex-col gap-4 py-2 px-4 rounded-lg bg-[#F5F5DC]">
                  <p>Buy Now</p>
                  <Link to="/play/prizes">Prizes</Link>
                  <Link to="/play/how-to-play">How to play</Link>
                </div>
              </div>
            </div>
            <div
              className={`dropDowns flex items-center gap-2 relative ${
                activeDropDown == 2 ? "activeElement" : ""
              }`}
              onMouseEnter={() => setActiveDropDown(2)}
              onMouseLeave={() => setActiveDropDown()}
            >
              <p>DRAWS</p>
              <FaAngleDown />
              <div
                className={`absolute top-full left-0 py-4 ${
                  activeDropDown == 2 ? "block" : "hidden"
                }`}
              >
                <div className="w-max flex flex-col gap-4 py-2 px-4 rounded-lg bg-[#F5F5DC]">
                  <p>Weekly live streams</p>
                  <p>Previous draw results</p>
                  <p>Previous live draws</p>
                </div>
              </div>
            </div>
            <div
              className={`dropDowns flex items-center gap-2 relative ${
                activeDropDown == 3 ? "activeElement" : ""
              }`}
              onMouseEnter={() => setActiveDropDown(3)}
              onMouseLeave={() => setActiveDropDown()}
            >
              <p>COMMUNITY</p>
              <FaAngleDown />
              <div
                className={`absolute top-full left-0 py-4 ${
                  activeDropDown == 3 ? "block" : "hidden"
                }`}
              >
                <div className="w-max flex flex-col gap-4 py-2 px-4 rounded-lg bg-[#F5F5DC]">
                  <p>Support initiatives</p>
                  <p>Fraud awareness</p>
                </div>
              </div>
            </div>
            <p className="dropDowns cursor-pointer">LATEST NEWS</p>
            <p className="cursor-pointer">ABOUT US</p>
          </div>
          <div className="flex items-center gap-7 lg:gap-10">
            <div
              className={`dropDowns flex items-center gap-2 relative ${
                activeDropDown == 4 ? "activeElement" : ""
              }`}
              onMouseEnter={() => setActiveDropDown(4)}
              onMouseLeave={() => setActiveDropDown()}
            >
              <p>AED</p>
              <FaAngleDown />
            </div>
            <div
              className={`dropDowns flex items-center gap-2 relative ${
                activeDropDown == 5 ? "activeElement" : ""
              }`}
              onMouseEnter={() => setActiveDropDown(5)}
              onMouseLeave={() => setActiveDropDown()}
            >
              <p>ENGLISH</p>
              <FaAngleDown />
              <div
                className={`absolute top-full left-0 py-4 ${
                  activeDropDown == 5 ? "block" : "hidden"
                }`}
              >
                <div className="w-max flex flex-col gap-4 py-2 px-4 rounded-lg bg-[#F5F5DC]">
                  <p>English</p>
                  <p>Arabic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
