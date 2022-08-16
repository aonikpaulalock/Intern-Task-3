import React from 'react';
import main from "../../Asset/Easy-Signup/Group 44.png"
import icon1 from "../../Asset/Easy-Signup/use1.svg"
import icon2 from "../../Asset/Easy-Signup/use2.svg"
import icon3 from "../../Asset/Easy-Signup/use3.svg"
import icon4 from "../../Asset/Easy-Signup/use4.svg"
import "../../Styles/ApplyContest.css"
const applys = [
  { id: 1, name: "Easy to sign up", des: "Leo mi faucibus elit sociis vitae nisi sed neque.", icon: icon1 },
  { id: 2, name: "Find your favorite contest", des: "Leo mi faucibus elit sociis vitae nisi sed neque.", icon: icon2 },
  { id: 3, name: "Flow the client requirements", des: "Leo mi faucibus elit sociis vitae nisi sed neque.", icon: icon3 },
  { id: 4, name: "Submit your unique entry", des: "Leo mi faucibus elit sociis vitae nisi sed neque.", icon: icon4 }
]
const ApplyContest = () => {
  return (
    <div className="w-10/12 mx-auto pt-28 pb-28">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-5">
        <div>
          <img src={main} alt="" />
        </div>
        <div className="mt-8">
          <div className="">
            <h5 className="font-[IBM Plex Sans] font-bold text-xl text-[#81BAE3]">Learn how can you apply</h5>
            <h2 className="font-[IBM Plex Sans] font-bold text-4xl text-[#040451] not-italic pt-4 pb-6">Easily to submit your entry</h2>
            <p className="font-[IBM Plex Sans] font-light text-base text-[#383885] not-italic mb-12">Leo mi faucibus elit sociis vitae nisi sed neque. Tortor diam arcu in facilisi vestibulum</p>
          </div>
          <div className="">
            {
              applys.map(apply =>
                <div key={apply.id} className="flex items-center mb-10">
                  <h1 className="image-center mr-7">
                    <img src={apply.icon} alt=""  className=""/>
                  </h1>
                  <h1>
                    <h2 className="font-[IBM Plex Sans] font-medium text-2xl text-[#040451] mb-0 pb-2 not-italic">{apply.name}</h2>
                    <h6 className="font-[IBM Plex Sans] font-light text-base text-[#383885] not-italic mb-0 ">{apply.des}</h6>
                  </h1>
                </div>
              )
            }
          </div>
          <button className="font-[IBM Plex Sans] font-light text-base text-[#FFFFFF] not-italic bg-[#040451] py-3 px-8 mt-12">Load More</button>
        </div>
      </div>
    </div>
  );
};

export default ApplyContest;