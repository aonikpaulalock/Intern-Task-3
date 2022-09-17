import React from 'react';
import Achievements from './Achievements';
import ApplyContest from './ApplyContest';
import Banner from './Banner';
import Blogs from './Blogs';
import Contests from './Contests';
import Footer from './Footer';
import Future from './Future';
import Partner from './Partner';
import Subscribe from './Subscribe';

const Home = () => {
  return (
    <>
      <Banner />
      <Achievements />
      <Contests />
      <ApplyContest />
      <Partner />
      <Future />
      <Blogs />
      <Subscribe />
      <Footer/>
    </>
  );
};

export default Home;