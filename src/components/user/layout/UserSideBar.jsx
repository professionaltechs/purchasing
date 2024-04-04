import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// ICONS
import { HiMiniBars4 } from "react-icons/hi2";
import { GrDocumentUpdate } from "react-icons/gr";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiPurchaseTag } from "react-icons/bi";
import { LuRepeat } from "react-icons/lu";
import { BiMessageRounded } from "react-icons/bi";

const UserSideBar = () => {
  const [windowsWidth, setWindowsWidth] = React.useState(window.innerWidth);
  const [maxNavElemWidth, setMaxNavElemWidth] = React.useState();

  const handleResize = () => {
    setWindowsWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const hidingElements = document.getElementsByClassName("hidingElement");
    const sideBar = document.getElementsByClassName("adminDashboardMain");
    if (hidingElements.length) {
      let maxWidth = hidingElements[0].offsetWidth;
      for (let index = 0; index < hidingElements.length; index++) {
        const currentElementWidth = hidingElements[index].offsetWidth;
        if (currentElementWidth > maxWidth) {
          maxWidth = currentElementWidth;
        }
      }
      setMaxNavElemWidth(maxWidth);
      for (let index = 0; index < hidingElements.length; index++) {
        hidingElements[index].style.width = maxWidth + "px";
      }
    }
  }, [windowsWidth]);

  if (windowsWidth >= 1024) {
    const handleNavbarOpen = () => {
      const hidingElements = document.getElementsByClassName("hidingElement");
      if (hidingElements[0].style.width == "0px") {
        for (let index = 0; index < hidingElements.length; index++) {
          hidingElements[index].style.width = maxNavElemWidth + "px";
        }
        return;
      }
      for (let index = 0; index < hidingElements.length; index++) {
        const element = hidingElements[index];
        element.style.width = "0px";
      }
    };

    return (
      <>
        <div className="adminDashboardMain hidden lg:block rounded-lg h-[700px]">
          <div className="adminDashboardSidebar">
            <div className="adminDashboardSidebarHeader text-[#ADD8E6]">
              <div className="hidingElement">
                <h5 className="text-[14px]">User</h5>
              </div>
              <span className="px-3 shrink-0">
                <HiMiniBars4
                  className="icon"
                  onClick={handleNavbarOpen}
                  style={{ cursor: "pointer" }}
                />
              </span>
            </div>
            <div className="mt-10">
              <Link to="/user/profile" className="adminDashboardSidebarElem">
                <div className="hidingElement">
                  <h5 className="text-[14px]">Update Profile</h5>
                </div>
                <span className="px-3 shrink-0">
                  <GrDocumentUpdate className="icon" />
                </span>
              </Link>
              <Link
                to="/user/change-password"
                className="adminDashboardSidebarElem"
              >
                <div className="hidingElement">
                  <h5 className="text-[14px]">Change Password</h5>
                </div>
                <span className="px-3 shrink-0">
                  <RiLockPasswordLine className="icon" />
                </span>
              </Link>
              <Link to='/user/recurring-purchase' className="adminDashboardSidebarElem">
                <div className="hidingElement">
                  <h5 className="text-[14px]">Recurring Purchase</h5>
                </div>
                <span className="px-3 shrink-0">
                  <LuRepeat className="icon" />
                </span>
              </Link>
              <Link to='/user/messages' className="adminDashboardSidebarElem">
                <div className="hidingElement">
                  <h5 className="text-[14px]">Meassages</h5>
                </div>
                <span className="px-3 shrink-0">
                  <BiMessageRounded className="icon" />
                </span>
              </Link>
              <Link to='/user/my-purchase' className="adminDashboardSidebarElem">
                <div className="hidingElement">
                  <h5 className="text-[14px]">My Purchase</h5>
                </div>
                <span className="px-3 shrink-0">
                  <BiPurchaseTag className="icon" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default UserSideBar;
