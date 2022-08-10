import React from 'react';
import useContest from '../../Api/useContest';

const Hills = () => {
  const [contests] = useContest()
  console.log(contests)
  return (
    <div>
      <h1>Hills {contests.length}</h1>
    </div>
  );
};

export default Hills;