import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import PokemonList from "./PokemonList";
import TypeList from "./TypeList";
import React from "react";
import fetchData from "./fetchData";

function App() {
  const [showPokemon, setShowPokemon] = useState(true);
  const [showType, setShowType] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    fetchData("https://pokeapi.co/api/v2/pokemon?limit=8").then((result) => {
      setPokemon(result.data.results);
      result.data.results.forEach((pokemon) => {
        fetchData(pokemon.url).then((details) => {
          setPokemonDetails({
            ...pokemonDetails,
            [pokemon.url]: details.data,
          });
        });
      });
    });
    fetchData("https://pokeapi.co/api/v2/type").then((result) => {
      setTypes(result.data.results);
    });
  }, []);

  const switchView = () => {
    setShowPokemon(!showPokemon);
    setShowType(!showType);
  };

  return (
    <div className="App">
      <Navbar onClick={switchView} />
      {showPokemon && (
        <PokemonList pokemons={pokemon} details={pokemonDetails} />
      )}
      {showType && <TypeList types={types} />}
    </div>
  );
}

export default App;
