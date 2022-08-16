import React from 'react';
import Achievements from './Achievements';
import ApplyContest from './ApplyContest';
import Banner from './Banner';
import Contests from './Contests';
import Future from './Future';
import Partner from './Partner';

const Home = () => {
  return (
    <>
      <Banner />
      <Achievements />
      <Contests />
      <ApplyContest/>
      <Partner/>
      <Future/>
    </>
  );
};

export default Home;