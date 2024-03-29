import React from "react";

// IMAGES
import one from "../../assets/how to play/1.png";
import two from '../../assets/how to play/2.png'
import three from '../../assets/how to play/3.png'
import four from '../../assets/how to play/4.png'
import five from '../../assets/how to play/5.png'
import six from '../../assets/how to play/6.png'
import seven from '../../assets/how to play/7.png'
import eight from '../../assets/how to play/8.png'
import nine from '../../assets/how to play/9.png'
import ten from '../../assets/how to play/10.png'
import eleven from '../../assets/how to play/11.png'
import twelve from '../../assets/how to play/12.png'
import thirteen from '../../assets/how to play/13.png'
import fourteen from '../../assets/how to play/14.png'

const HowToPlay = () => {
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
      <div className="px-3 lg:px-10 mt-14 lg:mt-20 max-w-[900px] mx-auto">
        <h1 className="text-3xl text-center font-semibold lg:text-5xl">How To Play</h1>
        <div className="mt-28">
          <div className="flex items-center justify-between gap-[10px]">
            <img src={one} alt="" className="w-[40%] h-auto" />
            <p className="text-[#120059] font-medium">Sign up or log in to your current account</p>
          </div>
          <div className="flex flex-row-reverse items-center justify-between gap-[10px]">
            <img src={two} alt="" className="w-[40%] h-auto" />
            <p className="text-[#120059] font-medium">Purchase your tickets directly from the homepage or navigate to the "Buy Now" section located under Play.</p>
          </div>
          <div className="flex items-center justify-between gap-[10px]">
            <img src={three} alt="" className="w-[40%] h-auto" />
            <p className="text-[#120059] font-medium">
              Choose the quantity of water bottles you wish to purchase. Each bottle corresponds to one entry in the draw.</p>
          </div>
          <div className="flex flex-row-reverse items-center justify-between gap-[10px]">
            <img src={four} alt="" className="w-[40%] h-auto" />
            <p className="text-[#120059] font-medium">To increase the number of lines, simply click the plus sign or select "Add Another Line."</p>
          </div>
          <div className="flex items-center justify-between gap-[10px]">
            <img src={five} alt="" className="w-[40%] h-auto" />
            <p className="text-[#120059] font-medium">
              Select five numbers for each line.</p>
          </div>
          <div className="flex flex-row-reverse items-center justify-between gap-[10px]">
            <img src={six} alt="" className="w-[40%] h-auto" />
            <p className="text-[#120059] font-medium">
              To create a new favorite selection, click on the heart icon. Alternatively, choose from your existing favorites by clicking on the icon with a heart and lines.</p>
          </div>
          <div className="flex items-center justify-between gap-[10px]">
            <img src={seven} alt="" className="w-[40%] h-auto" />
            <p className="text-[#120059] font-medium">Place your selection into the cart.</p>
          </div>
          <div className="flex flex-row-reverse items-center justify-between gap-[10px]">
            <img src={eight} alt="" className="w-[40%] h-auto" />
            <p className="text-[#120059] font-medium">
              Configure recurring purchases (optional) by specifying the frequency, day of purchase, and duration.</p>
          </div>
          <div className="flex items-center justify-between gap-[10px]">
            <img src={nine} alt="" className="w-[40%] h-auto" />
            <p className="text-[#120059] font-medium">
              Before proceeding to checkout, apply any voucher codes you have by entering them.</p>
          </div>
          <div className="flex flex-row-reverse items-center justify-between gap-[10px]">
            <img src={ten} alt="" className="w-[40%] h-auto" />
            <p className="text-[#120059] font-medium">

              If you have a credit balance, you can utilize it to cover your purchase. Otherwise, proceed by clicking on "Checkout."</p>
          </div>
          <div className="flex items-center justify-between gap-[10px]">
            <img src={eleven} alt="" className="w-[40%] h-auto" />
            <p className="text-[#120059] font-medium">Select from a saved card or enter the details of a new card to complete your payment.</p>
          </div>
          <div className="flex flex-row-reverse items-center justify-between gap-[10px]">
            <img src={twelve} alt="" className="w-[40%] h-auto" />
            <p className="text-[#120059] font-medium">

              Expect to receive a confirmation via email or SMS shortly after completing your purchase.</p>
          </div>
          <div className="flex items-center justify-between gap-[10px]">
            <img src={thirteen} alt="" className="w-[40%] h-auto" />
            <p className="text-[#120059] font-medium">

              Tune in to the live draw on Saturday at 9:00 pm (UAE time) through any of the following channels:
              <br />
              Website: www.mahzooz.ae <br />
              YouTube: @mymahzooz <br />
              Facebook: @mymahzooz
            </p>
          </div>
          <div className="flex flex-row-reverse items-center justify-between gap-[10px]">
            <img src={fourteen} alt="" className="w-[40%] h-auto" />
            <p className="text-[#120059] font-medium">

              Great! If you need any further assistance, feel free to ask.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
