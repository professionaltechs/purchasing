import React from "react";

const GameCards = ({ name, aed, para }) => {
  return (
    <div
      className={`bg-[#1272E0] px-4 py-4 w-full max-w-[400px] text-white rounded-lg shadow-2xl lg:py-7 lg:px-6 cursor-pointer`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="py-1 px-4 border border-white rounded-2xl">AED {aed}</p>
      </div>
      <p className="mt-7 lg:mt-9 text-center">{para} </p>
      <div className="flex justify-between gap-2 mt-5 lg:mt-7">
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-2 w-full max-w-[300px] mx-auto">
          <div className="bg-white text-black text-center rounded-[8px] pt-1">
            <p className="text-[18px] lg:text-[20px] font-semibold">00</p>
            <p className="text-[11px] lg:text-[12px]">Days</p>
          </div>
          <div className="bg-white text-black text-center rounded-[8px] pt-1">
            <p className="text-[18px] lg:text-[20px] font-semibold">00</p>
            <p className="text-[11px] lg:text-[12px]">Hours</p>
          </div>
          <div className="bg-white text-black text-center rounded-[8px] pt-1">
            <p className="text-[18px] lg:text-[20px] font-semibold">00</p>
            <p className="text-[11px] lg:text-[12px]">Minutes</p>
          </div>
          <div className="bg-white text-black text-center rounded-[8px] pt-1">
            <p className="text-[18px] lg:text-[20px] font-semibold">00</p>
            <p className="text-[11px] lg:text-[12px]">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCards;
