import React from 'react';
import circle from "../../Asset/Future/Group 49.png"
import image from "../../Asset/Future/img.png"
import dot from "../../Asset/Future/Dot Pattern 3.png"
import shape from "../../Asset/Future/Spheres 1.png"
const Future = () => {
  return (
    <div className="w-10/12 mx-auto mt-40 mb-28 relative">
      <div className=" bg-[#001858]">
        <div className="flex justify-around items-center">
          <div className="pl-[100px] flex-1">
            <h1 className="font-[IBM Plex Sans] text-[55px] leading-snug not-italic text-[#FEF6E4] font-bold">Build your bright future</h1>
            <p className="font-[IBM Plex Sans] text-base not-italic text-[#FFFFFF] font-light mt-6 mb-10">Leo mi faucibus elit sociis vitae nisi sed neque. Tortor diam arcu in facilisi vestibulum.</p>
            <button className="bg-[#FFC397] py-3 px-8 font-[IBM Plex Sans] text-base not-italic text-[#001858] font-semibold">Meet Our Expert</button>
          </div>
          <div className="flex-1">
            <img src={circle} alt="" className="ml-[4.5%]"/> 
            <img src={image} alt="" className="mt-[-93%] ml-12"/>
          </div>
        </div>
      </div>
        <img src={dot} alt="" className="absolute bottom-[-7.5%] left-[-5%] z-[-1]" />
        <img src={shape} alt="" className="absolute bottom-[-5.5%] left-[-2.2%] w-24 h-24" />
    </div>
  );
};

export default Future;