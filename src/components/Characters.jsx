import React from 'react';
import { useSelector } from 'react-redux';

const Characters = () => {

  const userName = useSelector(state => state.userName);

  return (
    <div>
      <h1>Characters</h1>
      <p>{`Welcome ${userName}`}</p>
    </div>
  );
};

export default Characters; <h1>Characters</h1>