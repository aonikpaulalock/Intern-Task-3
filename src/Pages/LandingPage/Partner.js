import React from 'react';
import crossline from "../../Asset/Contest/line.png"
import logo1 from "../../Asset/Partner/Airbnb Logo.svg"
import logo2 from "../../Asset/Partner/Hubspot Logo.svg"
import logo3 from "../../Asset/Partner/Google Logo.svg"
import logo4 from "../../Asset/Partner/Microsoft Logo.svg"
import logo5 from "../../Asset/Partner/Walmart Logo.svg"
import logo6 from "../../Asset/Partner/FedEx Logo.svg"
import "../../Styles/Partner.css"
const logos = [
  { id: 1, img: logo1 },
  { id: 2, img: logo2 },
  { id: 3, img: logo3 },
  { id: 4, img: logo4 },
  { id: 5, img: logo5 },
  { id: 6, img: logo6 },
]
const Partner = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div>
        <h6 className="text-base text-center font-[IBM Plex Sans] not-italic text-[#81BAE3] font-bold mb-2">Client
          <img src={crossline} alt="" className="block mx-auto " />
        </h6>
        <h1 className="text-center font-[IBM Plex Sans] text-4xl not-italic text-[#040451] font-bold mt-2 mb-8">Meet our trusted partners</h1>
      </div>
      <div className="grid lg:grid-cols-6 gap-8">
      <span class="icon-Microsoft-Logo"></span>
      <span class="icon-Airbnb-Logo"></span>
      <span class="icon-Hubspot-Logo"></span>
      <span class="icon-Google-Logo"></span>
      <span class="icon-Walmart-Logo"></span>
      <span class="icon-FedEx-Logo"></span>
    
      </div>
    </div>
  );
};

export default Partner;