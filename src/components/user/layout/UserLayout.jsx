import React from "react";
import { Outlet } from "react-router-dom";

// COMPONENTS
import UserSideBar from "./UserSideBar";

const UserLayout = () => {
  return (
    <div className="px-2 grow flex flex-col lg:px-10">
      <h1 className="text-3xl font-medium lg:text-4xl text-center">
        My Profile
      </h1>
      <div className="grow flex gap-4 mt-2 items-stretch">
        <UserSideBar />
        <div className="grow rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
