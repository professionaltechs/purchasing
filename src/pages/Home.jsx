import React, { useState } from "react";

// COMPONENTS
import Carousel from "../components/Home/Carousel";
import LatestDraws from "../components/Home/LatestDraws";
import Stories from "../components/Home/Stories";

const Home = () => {
  const [abc, def] = useState(Carousel)

  return (
    <div className="relative">
      <Carousel />
      <LatestDraws />
      <div className="ourGames mt-24 px-2 lg:px-10">
        <h1 className="text-3xl text-center lg:text-5xl font-semibold">Our Games</h1>
          
      </div>
      <Stories />
    </div>
  );
};

export default Home;
