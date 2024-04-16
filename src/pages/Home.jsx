import React, { useState } from "react";

// COMPONENTS
import Carousel from "../components/Home/Carousel";
import LatestDraws from "../components/Home/LatestDraws";
import Stories from "../components/Home/Stories";
import GameCards from "../components/Home/GameCards";

const Home = () => {
  return (
    <div className="relative">
      <Carousel />
      <LatestDraws />
      <div className="ourGames mt-24 px-2 lg:px-10">
        <h1 className="text-3xl text-center lg:text-5xl font-semibold">
          Our Games
        </h1>
        <div className="flex flex-wrap justify-center gap-9 mt-10 lg:mt-20">
          <GameCards />
          <GameCards />
          <GameCards />
          <GameCards />
        </div>
      </div>
      <Stories />
    </div>
  );
};

export default Home;
