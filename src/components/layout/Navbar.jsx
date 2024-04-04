import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ICONS
import { IoIosMenu } from "react-icons/io";
import { BsCreditCard } from "react-icons/bs";
import { MdLogin } from "react-icons/md";
import { FaUserPlus, FaOpencart } from "react-icons/fa6";

// ICONS
import { FaAngleDown } from "react-icons/fa6";

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

  // MOBILE SIDEBAR
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [sidebarDropDownOpen, setSideBarDropDownOpen] = useState(false);

  useEffect(() => {
    const sideBar = document.getElementsByClassName("mobileSidebar")[0];
    const sideBarBg = document.getElementsByClassName("sideBarOpenBg")[0];
    const navbarHeight =
      document.getElementsByClassName("navbarTop")[0].clientHeight;
    if (sideBarOpen) {
      sideBarBg.style.display = "block";
      sideBarBg.style.top = navbarHeight + "px";
      sideBarBg.style.height = `calc(100vh - ${navbarHeight}px)`;
      setTimeout(() => {
        sideBarBg.style.background = "rgb(0,0,0,0.5)";
      }, 100);

      document.body.style.overflow = "hidden";
      sideBar.style.top = navbarHeight + "px";
      sideBar.style.height = `calc(100vh - ${navbarHeight}px)`;
      sideBar.style.left = "0px";
      return;
    }
    sideBarBg.style.background = "transparent";
    setTimeout(() => {
      sideBarBg.style.display = "none";
    }, 300);

    document.body.style.overflow = "auto";
    // sideBar.style.top = navbarHeight + "px";
    // sideBar.style.height = `calc(100vh - ${navbarHeight}px)`;
    sideBar.style.left = "-100%";
  }, [sideBarOpen]);

  const openSidebarDropDown = () => {
    const sideBarDropDownElement = document.getElementsByClassName(
      "sideBarActiveDropDown"
    )[0];
    const requiredHeight = sideBarDropDownElement.firstChild.clientHeight;
    sideBarDropDownElement.style.height = requiredHeight + "px";
  };

  useEffect(() => {
    if (sidebarDropDownOpen) {
      openSidebarDropDown();
    }
  }, [sidebarDropDownOpen]);

  return (
    <>
      <div className="navbarTop flex items-center justify-between bg-[#120059]  text-white sticky top-0 z-50 py-4 px-6 md:py-6 md:px-10 lg:py-8 lg:px-14 ">
        <Link to="/" className="text-3xl">
          LOGO
        </Link>
        <IoIosMenu
          className="lg:hidden"
          onClick={() => setSideBarOpen(!sideBarOpen)}
        />
        <div className="hidden lg:flex items-center gap-7 lg:gap-12">
          <Link
            to="/play/buy-now"
            className="flex items-center gap-2 cursor-pointer hover:text-[#fed700]"
          >
            <BsCreditCard className="lg:text-xl" />
            <p>Buy Now</p>
          </Link>
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
      <div className="hidden lg:block navbarDropDowns sticky py-3 z-40 bg-[#F5F5F5]">
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
                <div className="w-max flex flex-col gap-4 py-2 px-4 rounded-lg bg-[#F5F5DC] min-w-[120px]">
                  <p>
                    <Link className="block" to="play/buy-now">
                      Buy Now
                    </Link>
                  </p>
                  <p>
                    <Link className="block" to="/play/prizes">
                      Prizes
                    </Link>
                  </p>
                  <p>
                    <Link className="block" to="/play/how-to-play">
                      How to play
                    </Link>
                  </p>
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
                <div className="w-max flex flex-col gap-4 py-2 px-4 rounded-lg bg-[#F5F5DC] min-w-[120px]">
                  <p>
                    <Link className="block" to="draws/previous-draw-results">
                      Previous draw results
                    </Link>
                  </p>
                  <p>
                    <Link className="block" to="draws/winners-stories">
                      Winners' Stories
                    </Link>
                  </p>
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
                <div className="w-max flex flex-col gap-4 py-2 px-4 rounded-lg bg-[#F5F5DC] min-w-[120px]">
                  <Link className="block">Facebook</Link>
                  <Link className="block">Instagram</Link>
                </div>
              </div>
            </div>
            <p>
              <Link to="/latest-news" className="dropDowns cursor-pointer">
                LATEST NEWS
              </Link>
            </p>
            <p>
              <Link to="/about-us" className="cursor-pointer">
                ABOUT US
              </Link>
            </p>
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
              <div
                className={`absolute top-full left-0 py-4 ${
                  activeDropDown == 4 ? "block" : "hidden"
                }`}
              >
                <div className="w-max flex flex-col gap-4 py-2 px-4 rounded-lg bg-[#F5F5DC] min-w-[120px]">
                  <Link className="block">Abc</Link>
                  <Link className="block">Xyz</Link>
                </div>
              </div>
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
                <div className="w-max flex flex-col gap-4 py-2 px-4 rounded-lg bg-[#F5F5DC] min-w-[120px]">
                  <Link className="block">English</Link>
                  <Link className="block">Arabic</Link>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div
        className="sideBarOpenBg lg:hidden fixed left-0 z-20 w-[100vw] bg-transparent"
        style={{ transition: "all 500ms" }}
        onClick={() => setSideBarOpen(false)}
      ></div>
      <div
        className={`mobileSidebar lg:hidden fixed w-[300px] bg-[#F5F5DC] z-50 overflow-auto`}
        style={{ transition: "all 400ms" }}
      >
        <div className="pt-14 pb-8 px-12 flex flex-col justify-between min-h-full h-max gap-14 z-50">
          <div className="flex flex-col gap-6 text-[#120059]">
            <div>
              <div
                className="flex items-end justify-between"
                onClick={() =>
                  sidebarDropDownOpen == 1
                    ? setSideBarDropDownOpen(0)
                    : setSideBarDropDownOpen(1)
                }
              >
                <p> Play</p>
                <FaAngleDown
                  className={`text-[12px] ${
                    sidebarDropDownOpen == 1 ? `rotate-180` : `rotate-0`
                  }`}
                  style={{ transition: "all 400ms" }}
                />
              </div>
              <div
                className={`${
                  sidebarDropDownOpen == 1
                    ? "sideBarActiveDropDown"
                    : "closseSidebarDropDown"
                } h-0 overflow-hidden`}
                style={{ transition: "all 400ms" }}
              >
                <div className="pt-3 flex flex-col gap-2 px-3">
                  <p>
                    <Link
                      onClick={() => {
                        setSideBarOpen(false);
                      }}
                      to="/play/buy-now"
                    >
                      Buy Now
                    </Link>
                  </p>
                  <p>
                    <Link
                      onClick={() => {
                        setSideBarOpen(false);
                      }}
                      to="/play/prizes"
                    >
                      Prizes
                    </Link>
                  </p>
                  <p>
                    <Link
                      onClick={() => {
                        setSideBarOpen(false);
                      }}
                      to="/play/how-to-play"
                    >
                      How To Play
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                className="flex items-end justify-between"
                onClick={() =>
                  sidebarDropDownOpen == 2
                    ? setSideBarDropDownOpen(0)
                    : setSideBarDropDownOpen(2)
                }
              >
                <p> Draws</p>
                <FaAngleDown
                  className={`text-[12px] ${
                    sidebarDropDownOpen == 2 ? `rotate-180` : `rotate-0`
                  }`}
                  style={{ transition: "all 400ms" }}
                />
              </div>
              <div
                className={`${
                  sidebarDropDownOpen == 2
                    ? "sideBarActiveDropDown"
                    : "closseSidebarDropDown"
                } h-0 overflow-hidden`}
                style={{ transition: "all 400ms" }}
              >
                <div className="pt-3 flex flex-col gap-2 px-3">
                  <p>
                    <Link
                      onClick={() => {
                        setSideBarOpen(false);
                      }}
                      to="/draws/previous-draw-results"
                    >
                      Previous draw results
                    </Link>
                  </p>
                  <p>
                    <Link
                      onClick={() => {
                        setSideBarOpen(false);
                      }}
                      to="/draws/winners-stories"
                    >
                      Winners' Stories
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                className="flex items-end justify-between"
                onClick={() =>
                  sidebarDropDownOpen == 3
                    ? setSideBarDropDownOpen(0)
                    : setSideBarDropDownOpen(3)
                }
              >
                <p>Community</p>
                <FaAngleDown
                  className={`text-[12px] ${
                    sidebarDropDownOpen == 3 ? `rotate-180` : `rotate-0`
                  }`}
                  style={{ transition: "all 400ms" }}
                />
              </div>
              <div
                className={`${
                  sidebarDropDownOpen == 3
                    ? "sideBarActiveDropDown"
                    : "closseSidebarDropDown"
                } h-0 overflow-hidden`}
                style={{ transition: "all 400ms" }}
              >
                <div className="pt-3 flex flex-col gap-2 px-3">
                  <p>
                    <Link>Facebook</Link>
                  </p>
                  <p>
                    <Link>Instagram</Link>
                  </p>
                </div>
              </div>
            </div>
            <p>
              <Link
                onClick={() => {
                  setSideBarOpen(false);
                }}
                to="/latest-news"
              >
                Latest News
              </Link>
            </p>
            <p>
              <Link
                onClick={() => {
                  setSideBarOpen(false);
                }}
                to="/about-us"
              >
                About Us
              </Link>
            </p>
            <div>
              <div
                className="flex items-end justify-between"
                onClick={() =>
                  sidebarDropDownOpen == 4
                    ? setSideBarDropDownOpen(0)
                    : setSideBarDropDownOpen(4)
                }
              >
                <p>AED</p>
                <FaAngleDown
                  className={`text-[12px] ${
                    sidebarDropDownOpen == 4 ? `rotate-180` : `rotate-0`
                  }`}
                  style={{ transition: "all 400ms" }}
                />
              </div>
              <div
                className={`${
                  sidebarDropDownOpen == 4
                    ? "sideBarActiveDropDown"
                    : "closseSidebarDropDown"
                } h-0 overflow-hidden`}
                style={{ transition: "all 400ms" }}
              >
                <div className="pt-3 flex flex-col gap-2 px-3">
                  <p>
                    <Link>Abc</Link>
                  </p>
                  <p>
                    <Link>Def</Link>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div
                className="flex items-end justify-between"
                onClick={() =>
                  sidebarDropDownOpen == 5
                    ? setSideBarDropDownOpen(0)
                    : setSideBarDropDownOpen(5)
                }
              >
                <p>English</p>
                <FaAngleDown
                  className={`text-[12px] ${
                    sidebarDropDownOpen == 5 ? `rotate-180` : `rotate-0`
                  }`}
                  style={{ transition: "all 400ms" }}
                />
              </div>
              <div
                className={`${
                  sidebarDropDownOpen == 5
                    ? "sideBarActiveDropDown"
                    : "closseSidebarDropDown"
                } h-0 overflow-hidden`}
                style={{ transition: "all 400ms" }}
              >
                <div className="pt-3 flex flex-col gap-2 px-3">
                  <p>
                    <Link>Xyz</Link>
                  </p>
                </div>
              </div>
            </div>
            <p>
              <Link
                onClick={() => {
                  setSideBarOpen(false);
                }}
                to="/user/profile"
              >
                Update Profile
              </Link>
            </p>
            <p>
              <Link
                onClick={() => {
                  setSideBarOpen(false);
                }}
                to="/user/change-password"
              >
                Change Password
              </Link>
            </p>
            <p>
              <Link
                onClick={() => {
                  setSideBarOpen(false);
                }}
                to="/user/recurring-purchase"
              >
                Recurring Purchase
              </Link>
            </p>
            <p>
              <Link
                onClick={() => {
                  setSideBarOpen(false);
                }}
                to="/user/messages"
              >
                Messages
              </Link>
            </p>
            <p>
              <Link
                onClick={() => {
                  setSideBarOpen(false);
                }}
                to="/user/my-purchase"
              >
                My Purchase
              </Link>
            </p>
          </div>

          <div>
            <hr className="border-[#120059]" />
            <div className="flex flex-col gap-6 mt-4">
              <p>
                <Link>Cart</Link>
              </p>
              <p>
                <Link
                  onClick={() => {
                    setSideBarOpen(false);
                  }}
                  to="/login"
                >
                  Login
                </Link>
              </p>
              <p>
                <Link
                  onClick={() => {
                    setSideBarOpen(false);
                  }}
                  to="/register"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
