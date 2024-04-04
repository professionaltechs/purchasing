import React from "react";
import { Outlet } from "react-router-dom";

// COMPONENTS
import UserSideBar from "./UserSideBar";

const UserLayout = () => {
  return (
    <>
      <div className="px-2 grow flex flex-col lg:px-10">
        <h1 className="text-3xl font-medium lg:text-4xl text-center lg:text-left">My Profile</h1>
        <div className="grow flex flex-col lg:flex-row gap-4 items-stretch mt-10 lg:mt-14">
          <UserSideBar />
          <div className="grow w-full shadow-2xl rounded-xl backdrop-blur-sm py-10 lg:py-16 px-2 lg:px-10 max-w-[700px] lg:max-w-none mx-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLayout;
