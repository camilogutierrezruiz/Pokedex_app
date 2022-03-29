import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

const PokemonCard = ({ PokemonUrl }) => {

  const [pokemonName, setPokemonName] = useState('');
  const [pokemonImg, setPokemonImg] = useState('');

  useEffect(() => {
    axios
      .get(PokemonUrl)
      .then(response => {
        setPokemonName(response.data.name);
        setPokemonImg(response.data.sprites.other.home.front_default);
      });
  }, [PokemonUrl]);

  return (
    <Link
      className={'pokedex__pokemoncard--linkcard'}
      to={`/pokedex/${pokemonName}`}>
      <div className={'pokedex__pokemoncard'}>
        <h2 className={'pokedex__pokemoncard--pokemonname'}>{pokemonName}</h2>
        <section className={'pokedex__pokemoncard--imgwrapper'}>
          <img
            className={'pokedex__pokemoncard--img'}
            src={pokemonImg}
            alt={'Pic Pokemon'}
          />
        </section>
      </div>
    </Link>
  );
};

export default PokemonCard;