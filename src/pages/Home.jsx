import React from "react";

// COMPONENTS
import Carousel from "../components/Home/Carousel";
import LatestDraws from "../components/Home/LatestDraws";
import Stories from "../components/Home/Stories";

const Home = () => {
  return (
    <>
      <Carousel />
      <LatestDraws />
      {/* <Stories /> */}
    </>
  );
};

export default Home;
