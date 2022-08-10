import React from 'react';
import crossline from "../../Asset/Contest/line.png"
import "../../Styles/Achievements.css"
const achievements = [
  { id: 1, contest: "Running Contest", contestRating: "200+" },
  { id: 2, contest: "Happy Clints", contestRating: "16126+" },
  { id: 3, contest: "Photography Expart", contestRating: "3k+" },
  { id: 4, contest: "Completed Contest", contestRating: "30k+" },
]
const Achievements = () => {
  return (
    <div className="achievements-container">
      <div className="achievements-content">
        <div>
          <h6 className="left-achievements-title">Top contest of this week
            <img src={crossline} alt="" className="block mx-auto mt-1 ml-[-.8rem]" />
          </h6>
          <h1 className="left-achievements-maintitle">Our Achievements</h1>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>
      <div className="achievements-history">
        <div className="grid grid-cols-4">
          {
            achievements.map(achievement =>
              <div className="achievement-card" key={achievement.id}>
                <h1 className="achievement-title">{achievement.contestRating}</h1>
                <h4 className="achievement-subtitle">{achievement.contest}</h4>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Achievements;