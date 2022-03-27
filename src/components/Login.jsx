import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  const submit = event => {
    event.preventDefault();
    console.log(userName);
    dispatch({
      type: 'GET_POKETRAINER',
      payload: userName,
    });
    resetInput();
    navigate('/characters');
  };

  const resetInput = () => {
    setUserName('');
  };

  return (
    <form action="" onSubmit={submit}>
      <input
        type="text"
        onChange={event => setUserName(event.target.value)}
        value={userName}
      />
      <button>Submit</button>
    </form>
  );
};

export default Login;