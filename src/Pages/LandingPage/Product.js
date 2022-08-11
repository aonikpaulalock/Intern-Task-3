import React from 'react';
import useContest from '../../Api/useContest';

const Product = () => {
  const [contests] = useContest()
  console.log(contests)
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {
        contests.filter(contest => contest.tag.includes("Product"))
          .map(contest =>
            <div key={contest._id} className="card-container">
              <div class="max-w-sm overflow-hidden">
                <div class="">
                  <div className="flex justify-between items-center">
                    <h6 className="contest-rating">{contest.rating}</h6>
                    <h5 className=" text-2xl font-medium text-[#001858] font-['IBM Plex Sans']">$ {contest.price}</h5>
                  </div>
                  <div>
                    <p className="text-content">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                    <h5 className="tag">Tag</h5>
                    <span className="flex tags">
                      <h5>{contest.tag[0]}</h5>
                      {
                        contest.tag[1] && <h5 className="ml-2">{contest.tag[1]}</h5>
                      }

                    </span>
                  </div>
                  <div className="user flex justify-between items-center">
                    <div className="flex items-center ">
                      <img src={contest.userImg} alt="" className="" />
                      <span className="ml-2">
                        <h2 className="user-name mb-1">{contest.user}</h2>
                        <p className="user-location">{contest.location}</p>
                      </span>
                    </div>
                    <p className="user-degi">{contest.userDesi}</p>
                  </div>
                  <button className="browse-button">Browse Contest</button>
                </div>
              </div>
            </div>
          )
      }
    </div>



  );
};

export default Product;