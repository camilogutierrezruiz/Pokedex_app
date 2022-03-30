import React from 'react';
import PokemonCard from './PokemonCard';
import '../index.css'

const PokemonList = ({ Pokemons }) => {

  return (
    <>
      <ul className={'pokedex__ul--wrapper'}>
        {
          Pokemons.map(pokemon => (
            <li
              className={'pokedex__pokemoncard--linkcard'}
              key={pokemon.url}>
              <PokemonCard PokemonUrl={pokemon.url} />
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default PokemonList;