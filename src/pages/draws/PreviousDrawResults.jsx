import React from "react";
import { DatePicker, Space } from "antd";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const PreviousDrawResults = () => {
  return (
    <div className="px-3 lg:px-10">
      <div className="">
        <h1 className="text-center text-3xl font-semibold lg:text-5xl">
          Past Draws
        </h1>
        <div className="pricingCards mt-14 lg:mt-18 max-w-[1300px] mx-auto">
          <div className="w-[100%] max-w-[320px] lg:max-w-sm mx-auto py-10 px-6 bg-white border border-gray-200 rounded-lg shadow hover:scale-[1.05] hover:shadow-xl transition-all duration-300">
            <h5 className="mb-2 text-xl lg:text-2xl font-semibold tracking-tight text-[#212121] text-center">
              02 / 04 / 2021
            </h5>
            <hr />
            <h3 className="text-lg lg:text-xl  text-center mt-4 lg:mt-6 font-medium">
              Winning Number
            </h3>
            <div className="text-2xl flex gap-3 justify-between  mx-auto text-[#120059] mt-4">
              <div className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] bg-[#fed500] flex items-center justify-center rounded-[50%] font-medium text-black">
                <p>23</p>
              </div>
              <div className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] bg-[#fed500] flex items-center justify-center rounded-[50%] font-medium text-black">
                <p>03</p>
              </div>
              <div className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] bg-[#fed500] flex items-center justify-center rounded-[50%] font-medium text-black">
                <p>21</p>
              </div>
              <div className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] bg-[#fed500] flex items-center justify-center rounded-[50%] font-medium text-black">
                <p>53</p>
              </div>
              <div className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] bg-[#fed500] flex items-center justify-center rounded-[50%] font-medium text-black">
                <p>42</p>
              </div>
            </div>
            <p className="mt-4 text-center">
              Winning raffle: <span className="font-bold">755278T5</span>
            </p>
          </div>
          <div className="w-[100%] max-w-[320px] lg:max-w-sm mx-auto py-10 px-6 bg-white border border-gray-200 rounded-lg shadow hover:scale-[1.05] hover:shadow-xl transition-all duration-300">
            <h5 className="mb-2 text-xl lg:text-2xl font-semibold tracking-tight text-[#212121] text-center">
              02 / 04 / 2021
            </h5>
            <hr />
            <h3 className="text-lg lg:text-xl  text-center mt-4 lg:mt-6 font-medium">
              Winning Number
            </h3>
            <div className="text-2xl flex gap-3 justify-between  mx-auto text-[#120059] mt-4">
              <div className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] bg-[#fed500] flex items-center justify-center rounded-[50%] font-medium text-black">
                <p>23</p>
              </div>
              <div className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] bg-[#fed500] flex items-center justify-center rounded-[50%] font-medium text-black">
                <p>03</p>
              </div>
              <div className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] bg-[#fed500] flex items-center justify-center rounded-[50%] font-medium text-black">
                <p>21</p>
              </div>
              <div className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] bg-[#fed500] flex items-center justify-center rounded-[50%] font-medium text-black">
                <p>53</p>
              </div>
              <div className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] bg-[#fed500] flex items-center justify-center rounded-[50%] font-medium text-black">
                <p>42</p>
              </div>
            </div>
            <p className="mt-4 text-center">
              Winning raffle: <span className="font-bold">755278T5</span>
            </p>
          </div>
          <div className="w-[100%] max-w-[320px] lg:max-w-sm mx-auto py-10 px-6 bg-white border border-gray-200 rounded-lg shadow hover:scale-[1.05] hover:shadow-xl transition-all duration-300">
            <h5 className="mb-2 text-xl lg:text-2xl font-semibold tracking-tight text-[#212121] text-center">
              02 / 04 / 2021
            </h5>
            <hr />
            <h3 className="text-lg lg:text-xl  text-center mt-4 lg:mt-6 font-medium">
              Winning Number
            </h3>
            <div className="text-2xl flex gap-3 justify-between  mx-auto text-[#120059] mt-4">
              <div className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] bg-[#fed500] flex items-center justify-center rounded-[50%] font-medium text-black">
                <p>23</p>
              </div>
              <div className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] bg-[#fed500] flex items-center justify-center rounded-[50%] font-medium text-black">
                <p>03</p>
              </div>
              <div className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] bg-[#fed500] flex items-center justify-center rounded-[50%] font-medium text-black">
                <p>21</p>
              </div>
              <div className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] bg-[#fed500] flex items-center justify-center rounded-[50%] font-medium text-black">
                <p>53</p>
              </div>
              <div className="w-[35px] h-[35px] lg:w-[40px] lg:h-[40px] bg-[#fed500] flex items-center justify-center rounded-[50%] font-medium text-black">
                <p>42</p>
              </div>
            </div>
            <p className="mt-4 text-center">
              Winning raffle: <span className="font-bold">755278T5</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center mx-auto w-fit mt-28">
        <p className="font-medium">Select Date : </p>
        <Space direction="vertical" size={12}>
          <DatePicker
            onChange={onChange}
            style={{ color: "#120059", borderColor: "#120059" }}
          />
        </Space>
      </div>

      <h1 className="text-2xl lg:text-4xl text-center font-semibold mt-14">
        Grand Draw
      </h1>
      <div className="text-2xl flex gap-3 justify-between  mx-auto text-[#120059] max-w-[300px] lg:max-w-[400px] mt-7 lg:mt-10">
        <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] bg-[#fed500] flex items-center justify-center rounded-[50%] font-medium text-black">
          <p>23</p>
        </div>
        <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] bg-[#fed500] flex items-center justify-center rounded-[50%] font-medium text-black">
          <p>03</p>
        </div>
        <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] bg-[#fed500] flex items-center justify-center rounded-[50%] font-medium text-black">
          <p>21</p>
        </div>
        <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] bg-[#fed500] flex items-center justify-center rounded-[50%] font-medium text-black">
          <p>53</p>
        </div>
        <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] bg-[#fed500] flex items-center justify-center rounded-[50%] font-medium text-black">
          <p>42</p>
        </div>
      </div>

      <div className="overflow-x-auto mt-14 max-w-[1300px] mx-auto pb-2">
        <div className="min-w-[500px] grid grid-cols-5 border-2 border-black">
          <div className="px-4 py-3 font-bold border border-black text-[#000]">
            <p>MATCH</p>
          </div>
          <div className="px-4 py-3 font-bold border border-black text-[#000]">
            <p>NUMBER OF WINNERS</p>
          </div>
          <div className="px-4 py-3 font-bold border border-black text-[#000]">
            <p>PRIZE POOL</p>
          </div>
          <div className="px-4 py-3 font-bold border border-black text-[#000]">
            <p>PRIZE TYPE</p>
          </div>
          <div className="px-4 py-3 font-bold border border-black text-[#000]">
            <p>WINNINGS</p>
          </div>

          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>5</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>0</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>AED 20,000,000</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>SHARED POOL</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>AED 0.00</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>4</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>23</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>AED 20,000,000</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>SHARED POOL</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>AED 0.00</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>3</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>45</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>AED 20,000,000</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>SHARED POOL</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>AED 0.00</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>2</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>60</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>AED 20,000,000</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>SHARED POOL</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>AED 0.00</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>1</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>76</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>AED 20,000,000</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>SHARED POOL</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>AED 0.00</p>
          </div>
        </div>
      </div>

      <h1 className="text-2xl lg:text-4xl text-center font-semibold mt-20">
        TRIPLE 100 RAFFLE
      </h1>

      <div className="overflow-x-auto mt-14 max-w-[1300px] mx-auto pb-2">
        <div className="min-w-[500px] grid grid-cols-2 border-2 border-black">
          <div className="px-4 py-3 font-bold border border-black text-[#000]">
            <p>RAFFLE ID</p>
          </div>
          <div className="px-4 py-3 font-bold border border-black text-[#000]">
            <p>AMOUNT </p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>41004490</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>AED 100,000</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>41060320</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>AED 100,000</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>41035916</p>
          </div>
          <div className="px-4 py-3 border border-black text-[#120059]">
            <p>AED 100,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousDrawResults;
