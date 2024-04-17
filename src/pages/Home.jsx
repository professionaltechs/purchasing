import React, { useEffect, useState } from "react";

// COMPONENTS
import Carousel from "../components/Home/Carousel";
import LatestDraws from "../components/Home/LatestDraws";
import Stories from "../components/Home/Stories";
import GameCards from "../components/Home/GameCards";

// AXIOS
import { gameInstance } from "../axios/axios";

const Home = () => {
  const [gameCardDetails, setGameCardDetails] = useState([]);

  // API FUNCTIOMS
  const getGameDetails = async () => {
    try {
      const response = await gameInstance.get("/games/get-game-cards-details");
      setGameCardDetails(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGameDetails();
  }, []);

  return (
    <div className="relative">
      <Carousel />
      <LatestDraws />
      <div className="ourGames mt-24 px-2 lg:px-10">
        <h1 className="text-3xl text-center lg:text-5xl font-semibold">
          Our Games
        </h1>
        <div className="flex flex-wrap justify-center gap-9 mt-10 lg:mt-20">
          {gameCardDetails?.map((val, index) => {
            return (
              <GameCards
                key={index}
                name={val?.name}
                aed={val?.aed}
                para={val?.para}
              />
            );
          })}
        </div>
      </div>
      <Stories />
    </div>
  );
};

export default Home;
