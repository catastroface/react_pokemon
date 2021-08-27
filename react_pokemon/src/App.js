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

  useEffect(() => {
    fetchData("https://pokeapi.co/api/v2/pokemon?limit=8").then((result) => {
      setPokemons(result.data.results);
      result.data.results.forEach((pokemon) => {
        fetchData(pokemon.url).then((details) => {
          console.log(details.data.name);
          setPokemonDetails((prev) => ({
            ...prev,
            [pokemon.url]: details.data,
          }));
          console.log(pokemonDetails);
        });
      });
    });
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
