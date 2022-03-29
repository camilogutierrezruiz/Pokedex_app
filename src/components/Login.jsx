import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokedexLogo from '../assets/PokedexLogo.svg'
import '../index.css'

const Login = () => {

  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  const submit = event => {
    event.preventDefault();
    dispatch({
      type: 'GET_POKETRAINER',
      payload: userName[0].toUpperCase() + userName.slice(1),
    });
    navigate('/pokedex');
    resetInput();
  };

  const resetInput = () => {
    setUserName('');
  };

  return (
    <section className={'form-start__wrapper'}>
      <section className={'form-start__logo--wrapper'}>
        <img
          className={'form-start__logo'}
          src={PokedexLogo}
          alt="Pokedex Website Logo"
        />
      </section>
      <h1 className={'form-start__title'}>
        ¡Hello trainer!
      </h1>
      {/* <h3 className={'form-start__subtitle'}>
        Give me your name to start
      </h3> */}
      <form
        className={'form-start__form'}
        action=""
        onSubmit={submit}
      >
        <section className={'form-start__input--wrapper'}>
          <input
            className={'form-start__input'}
            type="text"
            onChange={event => setUserName(event.target.value)}
            value={userName}
            placeholder={'Type your name to start'}
          />
          <button
            className={'form-start__sumbit'}
          >
            {<i className="fa-solid fa-chevron-right"></i>}
          </button>
        </section>
      </form>
    </section>
  );
};

export default Login;