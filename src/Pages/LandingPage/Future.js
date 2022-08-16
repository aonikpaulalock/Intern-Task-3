import React from 'react';
import circle from "../../Asset/Future/Group 49.png"
const Future = () => {
  return (
    <div className="w-10/12 mx-auto mt-40">
      <div className="bg-">
        <div className="flex justify-around items-center">
          <div>
            <h1>Build your bright future</h1>
            <p>Leo mi faucibus elit sociis vitae nisi sed neque. Tortor diam arcu in facilisi vestibulum.</p>
            <button>Meet Our Expert</button>
          </div>
          <div>
            <img src={circle} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;