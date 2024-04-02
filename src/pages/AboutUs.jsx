import React from "react";

// IMAGES
import aboutUsImage from "../assets/aboutUs.png";

const AboutUs = () => {
  return (
    <div className="px-3 lg:px-10">
      <h1 className="text-center text-3xl font-semibold lg:text-5xl">
        About Us
      </h1>
      <p className="text-[#120059] text-center mx-auto max-w-[900px] mt-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra
        tempor lectus, ut imperdiet justo fermentum sed. Nulla fringilla ante et
        libero rhoncus molestie. Phasellus at suscipit nisl, eget auctor lectus.
        Aliquam lorem orci, viverra at felis ac, interdum imperdiet urna. Duis
        molestie urna in sem ultrices, at dignissim ligula porttitor. Etiam
        ornare pellentesque luctus. Praesent faucibus tortor mauris, eu
        condimentum massa commodo ut. Pellentesque et metus purus. Quisque
        tempus efficitur eleifend. Aliquam erat volutp
      </p>
      <div className="flex flex-col lg:flex-row-reverse max-w-[1200px] mx-auto mt-16 gap-16 lg:items-center lg:mt-24">
        <img src={aboutUsImage} alt="" className="lg:w-[50%]" />
        <div>
          <h3 className="text-center lg:text-left text-3xl lg:text-4xl font-medium">Lorem Ipsum</h3>
          <p className="text-[#120059] text-center mx-auto max-w-[900px] mt-6 lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            pharetra tempor lectus, ut imperdiet justo fermentum sed. Nulla
            fringilla ante et libero rhoncus molestie. Phasellus at suscipit
            nisl, eget auctor lectus. Aliquam lorem orci, viverra at felis ac,
            interdum imperdiet urna. Duis molestie urna in sem ultrices, at
            dignissim ligula porttitor. Etiam ornare pellentesque luctus.
            Praesent faucibus
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
