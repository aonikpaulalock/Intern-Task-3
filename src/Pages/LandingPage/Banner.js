import React from 'react';
import "../../Styles/Banner.css"
const Banner = () => {
  return (
    <div className="banner-Container">
      <div className="banner-content w-3/4">
        <h1 className="banner-main">Welcome to our <br/> Biggest Community</h1>
        <p className="banner-sub">Photography is and art of teleporting the past into the future.</p>
        <button className="banner-button">Browse contest</button>
      </div>
    </div>
  );
};

export default Banner;