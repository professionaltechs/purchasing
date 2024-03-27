import React from "react";

// COMPONENTS
import Carousel from "../components/Home/Carousel";
import LatestDraws from "../components/Home/LatestDraws";
import Stories from "../components/Home/Stories";

// IMAGES
import bg from "../assets/bg.jpg";

const Home = () => {
  return (
    <div className="relative pb-32 lg:pb-48">
      <img
        src={bg}
        alt=""
        className="absolute w-full h-[100%] object-cover top-0 left-0 z-[-1]"
      />
      <Carousel />
      <LatestDraws />
      <Stories />
    </div>
  );
};

export default Home;
