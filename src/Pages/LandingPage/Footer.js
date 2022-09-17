import React from 'react';
import "../../Styles/Footer.css"
import logo from "../../Asset/Blogs/Group 49.png"
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <div className="flex justify-center items-center">
            <img src={logo} alt="" />
          </div>
          <div className="">
            {/* <Link to="#" >Home</Link>
            <Link to="#" >How it's work</Link>
            <Link to="#" >Articles</Link>
            <Link to="#" >About us</Link> */}
            <h4 className='font-[Poppins] font-medium text-base text-[#596EA8] pb-3'>Home</h4>
            <h4 className='font-[Poppins] font-medium text-base text-[#596EA8] pb-3'>Contest</h4>
            <h4 className='font-[Poppins] font-medium text-base text-[#596EA8] pb-3'>How it's work</h4>
            <h4 className='font-[Poppins] font-medium text-base text-[#596EA8] pb-3'>Articles</h4>
            <h4 className='font-[Poppins] font-medium text-base text-[#596EA8] pb-3'>About us</h4>
          </div>
          <div>
            <h4 className='font-[Poppins] font-medium text-base text-[#596EA8] pb-3'>Privacy</h4>
            <h4 className='font-[Poppins] font-medium text-base text-[#596EA8] pb-3'>Terms and Conditions</h4>
            <h4 className='font-[Poppins] font-medium text-base text-[#596EA8] pb-3'>Supports</h4>
            <h4 className='font-[Poppins] font-medium text-base text-[#596EA8] pb-3'>FAQ</h4>
            <h4 className='font-[Poppins] font-medium text-base text-[#596EA8] pb-3'>Expart</h4>
          </div>
          <div>
            <h4 className='font-[Poppins] font-medium text-base text-[#596EA8] pb-3'>Team</h4>
            <h4 className='font-[Poppins] font-medium text-base text-[#596EA8] pb-3'>Photographar</h4>
            <h4 className='font-[Poppins] font-medium text-base text-[#596EA8] pb-3'>Hire</h4>
            <h4 className='font-[Poppins] font-medium text-base text-[#596EA8] pb-3'>Complen</h4>
          </div>
        </div>
        <div className="flex justify-end items-center p-4">
          <h1 className="mr-3 text-[#001858] text-base font-bold font-[IBM Plex Sans] mb-0">Follow Us</h1>
          <div className="flex items-center ">
            <Icon icon="bi:facebook"  className="icon-facebook"/>
            <Icon icon="brandico:twitter-bird"  className="icon-twitter"/>
            <Icon icon="bi:linkedin" className="icon-linkedin" />
            <Icon icon="akar-icons:google-fill" className="icon-google" />
            <Icon icon="akar-icons:youtube-fill"  className="icon-youtube"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;