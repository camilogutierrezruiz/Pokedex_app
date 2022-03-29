import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../index.css'

const PokemonInfo = () => {

  const navigate = useNavigate();
  const { pokemonName } = useParams();

  const [name, setName] = useState('');
  const [img, setImg] = useState('');

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => {
        console.log(response.data);
        setName(response.data.name);
        setImg(response.data.sprites.other.home.front_default);
      });
  }, [pokemonName]);

  return (
    <div>
      <h1>pokemon info</h1>
      <button onClick={() => navigate('/pokedex')}>List</button>
      <h1>{name}</h1>
      <img src={img} alt="" />
    </div>
  );
};

export default PokemonInfo;