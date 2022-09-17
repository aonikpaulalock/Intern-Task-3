import React from 'react';
import Slider from "react-slick";
import crossline from "../../Asset/Contest/line.png"
import useBlogs from '../../Api/useBlogs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styles/Blogs.css"
import useContest from '../../Api/useContest';
import { Link } from 'react-router-dom';
import Blog from './Blog';
const Blogs = () => {
  const [blogs] = useBlogs()
  // const [contests] = useContest()
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow:3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow:3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="w-10/12 mx-auto mt-20 mb-12">
      <div>
        <h6 className="text-base text-center font-[IBM Plex Sans] not-italic text-[#81BAE3] font-bold mb-2">Blogs
          <img src={crossline} alt="" className="block mx-auto " />
        </h6>
        <h1 className="text-center font-[IBM Plex Sans] text-4xl not-italic text-[#040451] font-bold mt-2 mb-8">Explore our latest Blog</h1>
      </div>
      <div className="container">
        <Slider {...settings}>
          {
            blogs.map(blog => <Blog
               key={blog._id}
               blog={blog}
               ></Blog>)
          }
        </Slider>
      </div>
    </div>
  );
};

export default Blogs;