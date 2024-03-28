import React from 'react'

// IMAGES
import bg from "../../assets/bg.jpg";

const BackGroundImage = () => {
  return (
    <img
        src={bg}
        alt=""
        className="absolute w-full h-[100%] object-cover top-0 left-0 z-[-1]"
      />
  )
}

export default BackGroundImage