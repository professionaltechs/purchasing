import React from "react";

const LatestDraws = () => {
  return (
    <div className="flex flex-col items-center px-3 mt-20 lg:flex-row lg:px-10 lg:gap-10 lg:max-w-[1420px] lg:mx-auto">
      <div className="text-center max-w-2xl lg:text-left">
        <h1 className="text-3xl lg:text-5xl font-semibold">WIN THE GRAND PRIZE</h1>
        <p className="mt-8 text-[#120059] lg:leading-6">
          Unlock the thrill of victory and seize the moment to WIN THE GRAND
          PRIZE! Dive into an exhilarating journey where every triumph brings
          you closer to extraordinary rewards. Whether you're chasing glory or
          seeking adventure, our grand prize awaits the bold and the determined.
          Join the excitement today and be the next champion in our exhilarating
          lineup of competitions and challenges. Don't miss your chance to claim
          the ultimate prize – start your winning journey now!
        </p>
      </div>
      <div className="latestDraws mt-16 py-12 px-3 sm:px-5 w-11/12 max-w-lg mx-auto rounded-3xl shadow-2xl bg-[#F5F5DC] lg:min-w-[440px] lg:mr-0">
        <h1 className="text-center text-3xl font-semibold">
          Latest Draw results
        </h1>
        <h5 className="text-center font-medium mt-4">10.3.2024</h5>
        <div className="flex justify-evenly mt-6 font-bold text-[#fed700]">
          <div className="bg-[#120059] min-w-10 min-h-10 rounded-full flex items-center justify-center lg:min-w-12 lg:min-h-12">
            <p>02</p>
          </div>
          <div className="bg-[#120059] min-w-10 min-h-10 rounded-full flex items-center justify-center lg:min-w-12 lg:min-h-12">
            <p>42</p>
          </div>
          <div className="bg-[#120059] min-w-10 min-h-10 rounded-full flex items-center justify-center lg:min-w-12 lg:min-h-12">
            <p>10</p>
          </div>
          <div className="bg-[#120059] min-w-10 min-h-10 rounded-full flex items-center justify-center lg:min-w-12 lg:min-h-12">
            <p>39</p>
          </div>
          <div className="bg-[#120059] min-w-10 min-h-10 rounded-full flex items-center justify-center lg:min-w-12 lg:min-h-12">
            <p>21</p>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex justify-between items-center mt-4">
            <p>MATCHING 5/5</p>
            <p className="text-[#120059] font-medium">1 Winner</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p>MATCHING 4/5</p>
            <p className="text-[#120059] font-medium">10 Winner</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p>MATCHING 3/5</p>
            <p className="text-[#120059] font-medium">30 Winner</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p>MATCHING 2/5</p>
            <p className="text-[#120059] font-medium">40 Winner</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p>MATCHING 1/5</p>
            <p className="text-[#120059] font-medium">50 Winner</p>
          </div>
        </div>
        <hr className="mt-10" />
        <h1 className="text-2xl text-center mt-10">TRIPLE 100 RAFFLE</h1>
        <div className="flex justify-evenly mt-6 font-bold text-[#120059]">
          <p>RAFFLE ID 42436810</p>
          <p>AED 100,000</p>
        </div>
        <div className="flex justify-evenly mt-6 font-bold text-[#120059]">
          <p>RAFFLE ID 42436810</p>
          <p>AED 100,000</p>
        </div>
        <div className="flex justify-evenly mt-6 font-bold text-[#120059]">
          <p>RAFFLE ID 42436810</p>
          <p>AED 100,000</p>
        </div>
      </div>
    </div>
  );
};

export default LatestDraws;
