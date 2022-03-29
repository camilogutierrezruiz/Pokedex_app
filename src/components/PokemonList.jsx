import React from 'react';
import PokemonCard from './PokemonCard';
import '../index.css'

const PokemonList = ({ Pokemons }) => {

  return (
    <>
      <ul>
        {
          Pokemons.map(pokemon => (
            <li key={pokemon.url}>
              <PokemonCard PokemonUrl={pokemon.url} />
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default PokemonList;