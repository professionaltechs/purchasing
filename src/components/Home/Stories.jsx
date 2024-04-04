import React from "react";

const Stories = () => {
  return (
    <div className="mt-24 flex flex-col gap-16 px-3 lg:px-10 lg:flex-row lg:items-center lg:max-w-[1420px] lg:mx-auto lg:gap-10">
      <iframe
        src="https://www.youtube.com/embed/E7wJTI-1dvQ"
        // frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen="allowfullscreen"
        title="video"
        className="w-11/12 shrink-0 h-56 sm:h-80 mx-auto max-w-lg rounded-3xl shadow-2xl lg:min-w-[440px] lg:ml-0"
      />
      <div className="max-w-2xl text-center lg:text-left">
        <h1 className="text-3xl lg:text-5xl font-semibold">Customer Experiences.</h1>
        <p className="text-[#120059] mt-8 lg:leading-6">
          Discover the voices that inspire us every day. Dive into the authentic
          stories of our valued customers as they share their experiences,
          journeys, and triumphs. From heartfelt moments to remarkable
          achievements, these video testimonials offer a glimpse into the impact
          our products/services have made in their lives. Join us in celebrating
          their successes and be inspired to embark on your own remarkable
          journey. Explore our customer stories and witness the power of
          real-life experiences.
        </p>
      </div>
    </div>
  );
};

export default Stories;
