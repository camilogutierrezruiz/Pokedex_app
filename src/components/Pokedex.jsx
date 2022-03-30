import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonList from "./PokemonList";
import PokedexLogo from '../assets/PokedexLogo.svg'
import '../index.css'

const Pokedex = () => {

  const pokeTrainer = useSelector(state => state.userName);
  const navigate = useNavigate();

  const [pokemonsInfo, setPokemonsInfo] = useState([]);
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonsType, setPokemonType] = useState([]);
  const [itemNumber, setItemsNUmber] = useState(12);
  const [page, setPage] = useState(1)

  useEffect(() => {
    getPokemonInfo();
    getPokemonType();
  }, []);


  const getPokemonInfo = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=898&offset=0`)
      .then(response => {
        setPokemonsInfo(response.data.results);
      });
  };

  const getPokemonType = () => {
    axios
      .get(`https://pokeapi.co/api/v2/type`)
      .then(response => {
        setPokemonType(response.data.results);
      });
  };

  const submit = event => {
    event.preventDefault();
    navigate(`/pokedex/${pokemonName.toLowerCase()}`);
  };

  const lastIndex = page * itemNumber;
  const firstIndex = lastIndex - itemNumber;
  const pokemonPaginated = pokemonsInfo.slice(firstIndex, lastIndex)
  const totalPages = Math.ceil(pokemonsInfo.length / itemNumber);
  const pagesNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesNumbers.push(i)
  };

  const handleShowPokemons = e => {
    setItemsNUmber(e.target.value)
  };

  const handlePokemonsType = event => {
    if (event.target.value === 'All') {
      getPokemonInfo();
    } else {
      axios
        .get(event.target.value)
        .then(response => {
          let pokemonsType = [];
          for (let i = 0; i < response.data.pokemon.length; i++) {
            pokemonsType[i] = response.data.pokemon[i].pokemon;
          };
          setPokemonsInfo(pokemonsType);
        })
    }
  };

  return (
    <section className={'pokedex__wrapper'}>
      <header className={'pokedex__header'}>
        <section className={'pokedex__header--firstwrapper'}>
          <section className={'pokedex__logo--wrapper'}>
            <img
              className={'pokedex__logo--img'}
              src={PokedexLogo}
              alt="Pokedex Website Logo"
            />
          </section>
          <section className={'pokedex__form--wrapper'}>
            <form
              className={'pokedex__form'}
              onSubmit={submit}
            >
              <input
                className={'pokedex__form--input'}
                type="text"
                onChange={event => setPokemonName(event.target.value)}
                value={pokemonName}
              />
              <button
                className={'pokedex__form--submitbutton'}
                type='submit'
              >search</button>
            </form>
          </section>
        </section>
        <h1
          className={'pokedex__user--title'}
        >{`Welcome ${pokeTrainer}`}</h1>
      </header>
      <main className={'pokedex__main'}>
        <section className={'pokedex__select--wrapper'}>
          <select
            className={'pokedex__select--pokemontype'}
            onChange={handlePokemonsType}
          >
            <option
              className={'pokedex__select--item'}
              value='All'
            >All</option>
            {
              pokemonsType.map(type => (
                <option
                  className={'pokedex__select--item'}
                  key={type.name}
                  value={type.url}
                >{type.name}</option>
              ))
            }
          </select>
        </section>
        <section>
          <select name="" id="" onChange={handleShowPokemons} defaultValue={itemNumber}>
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="32">32</option>
            <option value="40">40</option>
          </select>
        </section>
        <section className={'pokedex__main--pokemonlist'}>
          <PokemonList Pokemons={pokemonPaginated} />
        </section>
      </main>
      <footer>
        <section>
          <button
            onClick={() => setPage(page - 1)}
            disabled={page <= 1}
          >{<i className="fa-solid fa-chevron-left"></i>}</button>
          {/* <p>{`${page} / ${totalPages}`}</p> */}
          <section>
            {
              pagesNumbers.map(page => (
                <button key={page}
                  onClick={() => setPage(page)}
                >{page}</button>
              ))
            }
          </section>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page >= totalPages}
          >{<i className="fa-solid fa-chevron-right"></i>}</button>
        </section>
      </footer>
    </section >
  );
};

export default Pokedex;