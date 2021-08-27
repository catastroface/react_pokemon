import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import PokemonList from "./PokemonList";
import TypeList from "./TypeList";
import React from "react";
import fetchData from "./fetchData";

function App() {
  const [showPokemon, setShowPokemon] = useState(true);
  const [showType, setShowType] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getPokemonDataByPage(1);
    fetchData("https://pokeapi.co/api/v2/type").then((result) => {
      setTypes(result.data.results);
    });
    console.log(pokemonDetails);
  }, []);

  const switchView = () => {
    setShowPokemon(!showPokemon);
    setShowType(!showType);
    console.log(pokemonDetails);
  };

  const getPokemonDataByPage = (page) => {
    const offset = (parseInt(page) - 1) * 8;
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=8`;
    fetchData(url).then((result) => {
      setPokemons(result.data.results);
      result.data.results.forEach((pokemon) => {
        fetchData(pokemon.url).then((details) => {
          console.log(details.data.name);
          setPokemonDetails((prev) => ({
            ...prev,
            [pokemon.url]: details.data,
          }));
        });
      });
    });
    setCurrentPage(page);
  };

  const changePage = (step) => {
    if (parseInt(step) < 0) {
      if (currentPage !== 1) {
        getPokemonDataByPage(currentPage + step);
      }
    } else {
      getPokemonDataByPage(currentPage + step);
    }
  };

  return (
    <div className="App">
      <Navbar onClick={switchView} />
      {showPokemon && (
        <PokemonList pokemons={pokemons} details={pokemonDetails} />
      )}
      {showType && <TypeList types={types} />}
    </div>
  );
}

export default App;
