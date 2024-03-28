import React from "react";

// ICONS
import { FaRegCircleCheck, FaRegCircle } from "react-icons/fa6";

const Prizes = () => {
  return (
    <div className="relative">
      <div
        role="status"
        className="flex items-center justify-center h-96 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700 w-11/12 max-w-6xl mx-auto"
      >
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>

      <div className="px-3 lg:px-10 max-w-[1160px] mx-auto">
        <h1 className="text-3xl text-center mt-14 lg:mt-20 font-semibold lg:text-5xl">
          Weekend Champion
        </h1>
        <p className="text-center text-[#120059] leading-6 mt-5 max-w-[1100px] mx-auto lg:mt-10">
          Dive into the thrill of matching 5 out of 5 numbers for an
          exhilarating chance to claim AED 20,000 and step into the spotlight as
          our next millionaire! Even if you come close with 4 out of 5 numbers
          or 3 out of 5, you're still in the game, sharing in a generous prize
          pool of AED 150,000 with other winners in your league. And the
          excitement doesn't stop there – matching 2 out of 5 numbers could land
          you a cool AED 35, while a single match of 1 out of 5 numbers still
          scores you AED 5
        </p>
        <h1 className="text-3xl text-center mt-12 font-semibold lg:text-4xl lg:mt-16">
          Unlock Bigger Wins with Every Match!
        </h1>
        <div className="pricingCards mt-14 lg:mt-18">
          <div class="w-[100%] max-w-sm mx-auto py-10 px-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-[1.05] hover:shadow-xl transition-all duration-300">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-[#212121] text-center dark:text-white">
              5/5 Match
            </h5>
            <div className="text-2xl flex gap-3 justify-between w-48 mx-auto text-[#120059]">
              <FaRegCircleCheck />
              <FaRegCircleCheck />
              <FaRegCircleCheck />
              <FaRegCircleCheck />
              <FaRegCircleCheck />
            </div>
            <h3 className="text-center mt-4 font-extrabold tracking-wider text-3xl text-[#130059]">
              AED 20,000
            </h3>
          </div>
          <div class="w-[100%] max-w-sm mx-auto py-10 px-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-[1.05] hover:shadow-xl transition-all duration-300">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-[#212121] text-center dark:text-white">
              4/5 Match
            </h5>
            <div className="text-2xl flex gap-3 justify-between w-48 mx-auto text-[#120059]">
              <FaRegCircleCheck />
              <FaRegCircleCheck />
              <FaRegCircleCheck />
              <FaRegCircleCheck />
              <FaRegCircle />
            </div>
            <h3 className="text-center mt-4 font-extrabold tracking-wider text-3xl text-[#130059]">
              AED 20,000
            </h3>
          </div>
          <div class="w-[100%] max-w-sm mx-auto py-10 px-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-[1.05] hover:shadow-xl transition-all duration-300">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-[#212121] text-center dark:text-white">
              3/5 Match
            </h5>
            <div className="text-2xl flex gap-3 justify-between w-48 mx-auto text-[#120059]">
              <FaRegCircleCheck />
              <FaRegCircleCheck />
              <FaRegCircleCheck />
              <FaRegCircle />
              <FaRegCircle />
            </div>
            <h3 className="text-center mt-4 font-extrabold tracking-wider text-3xl text-[#130059]">
              AED 20,000
            </h3>
          </div>
          <div class="w-[100%] max-w-sm mx-auto py-10 px-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-[1.05] hover:shadow-xl transition-all duration-300">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-[#212121] text-center dark:text-white">
              2/5 Match
            </h5>
            <div className="text-2xl flex gap-3 justify-between w-48 mx-auto text-[#120059]">
              <FaRegCircleCheck />
              <FaRegCircleCheck />
              <FaRegCircle />
              <FaRegCircle />
              <FaRegCircle />
            </div>
            <h3 className="text-center mt-4 font-extrabold tracking-wider text-3xl text-[#130059]">
              AED 20,000
            </h3>
          </div>
          <div class="w-[100%] max-w-sm mx-auto py-10 px-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-[1.05] hover:shadow-xl transition-all duration-300">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-[#212121] text-center dark:text-white">
              1/5 Match
            </h5>
            <div className="text-2xl flex gap-3 justify-between w-48 mx-auto text-[#120059]">
              <FaRegCircleCheck />
              <FaRegCircle />
              <FaRegCircle />
              <FaRegCircle />
              <FaRegCircle />
            </div>
            <h3 className="text-center mt-4 font-extrabold tracking-wider text-3xl text-[#130059]">
              AED 20,000
            </h3>
          </div>
        </div>
        <div className="flex flex-col  mt-24 gap-16 lg:flex-row lg:items-center">
          <p className="text-center text-[#120059] max-w-[700px] leading-6 mx-auto lg:text-left">
            Get ready for triple the excitement, triple the thrill, and triple
            the chances to win big! Join us in our electrifying Tripple 100
            Raffle where every ticket is a golden opportunity to turn dreams
            into reality.
            <br />
            With not one, not two, but three grand prizes of AED 100,000 each up
            for grabs, the stakes have never been higher. Whether you're a
            seasoned player or trying your luck for the first time, don't miss
            your shot at becoming one of our lucky winners.
          </p>
          <div className="bg-[#171717] text-white 2-[100%] max-w-lg mx-auto px-3 py-16 rounded-lg sm:py-28 sm:px-12 transition-all duration-300 hover:scale-[1.05] hover:shadow-xl lg:min-w-[416px]">
            <h1 className="text-3xl text-center font-bold tracking-wider leading-10">
              Tripple 100 Raffle
            </h1>
            <hr className="mt-7 max-w-sm mx-auto" />
            <h3 className="text-xl text-center mt-7">3 x AED 20,000</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
