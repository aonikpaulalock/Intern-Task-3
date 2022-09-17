import React from 'react';

const Blog = ({blog}) => {
  return (
    <div class="rounded  p-5  bg-[#F9F9F9]">
      <img class="w-full " src={blog.img} alt="Sunset in the mountains" />
      <div className="flex justify-between items-center mt-6 mb-7">
        <h6 className="flex items-center font-[IBM Plex Sans] text-sm text-[#A4A4A4] font-light ">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="#A4A4A4" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {blog.date}
        </h6>
        <h6 className="flex items-center font-[IBM Plex Sans] text-sm text-[#A4A4A4] font-light">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="#A4A4A4" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          {blog.views}
        </h6>
        <h6 className="flex items-center font-[IBM Plex Sans] text-sm text-[#A4A4A4] font-light">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="#A4A4A4" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          {blog.share}
        </h6>
      </div>
      <div class="">
        <div className="flex items-center">
          <img src={blog.useImg} alt="" />
          <h1 className="ml-4">
            <h2 className="font-[IBM Plex Sans] text-base text-[#001858] font-medium">{blog.userName}</h2>
            <p className="user-location">{blog.userDegi}</p>
          </h1>
        </div>
        <p className="font-[IBM Plex Sans] text-base text-[#001858] font-medium not-italic mt-3 mb-6">{blog.content}</p>
        <hr className="line" />
        <button className="font-[IBM Plex Sans] text-base text-[#001858] font-bold not-italic mt-6 mb-4 block mx-auto" >Learn More</button>
      </div>
    </div>
  );
};

export default Blog;