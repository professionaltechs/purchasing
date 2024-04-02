import React from "react";
import { Outlet } from "react-router-dom";

// COMPONENTS
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackGroundImage from "./BackGroundImage";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <BackGroundImage />
      <Navbar />
      <div className="grow flex flex-col pb-32 pt-10 lg:pb-48 relative">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
