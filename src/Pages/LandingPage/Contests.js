import React from 'react';
import crossline from "../../Asset/Contest/line.png"
import Search from "../../Asset/Contest/search icon.svg"
import "../../Styles/Contest.css"
const Contests = () => {
  return (
    <div className="contest-container">
      <div className="contest-heading-content">
        <h6 className="contest-sub">Top contest of this week
          <img src={crossline} alt="" className="block mx-auto" />
        </h6>
        <h1 className="contest-main text-center">Find your favorite contest</h1>
        <div class="flex items-center justify-center">
          <div class="flex input-container">
              <img src={Search} alt=""  className="image-positon"/>
            <input type="text" placeholder="Search Your Contest" class="input-field" />
              <button class="search-button">
                Search
              </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contests;