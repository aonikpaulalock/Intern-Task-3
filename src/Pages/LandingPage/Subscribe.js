import React from 'react';
import "../../Styles/Subscribe.css";
import image1 from "../../Asset/Blogs/Mask Group1.png";
import image2 from "../../Asset/Blogs/Sphere.png";
const Subscribe = () => {
  return (
    <div className="w-10/12 mx-auto mt-20 mb-12">
      <div className="subscribe-container">
         <img src={image1} alt="" className='image-1' />
         <img src={image2} alt="" className='image-2' />
         <h3 className="text-center mb-8 text-4xl text-[#FEF6E4] font-[IBM Plex Sans] font-bold">Subscribe to our Newsletter</h3>
        <div class="relative w-8/12 mx-auto">
          <input type="search" class="block p-6 w-10/12 z-20 bg-[#435892] text-[#FFFFFF]" placeholder="Enter Your Email" required/>
          <button type="submit" class="absolute top-0 right-[15px] py-6 px-16 text-base font-semibold font-[IBM Plex Sans] bg-[#FFC397] text-[#001858]">Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;