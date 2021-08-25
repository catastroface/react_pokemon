import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import PokemonList from "./PokemonList";
import TypeList from "./TypeList";
import React from "react";

function App() {
  const [showPokemon, setShowPokemon] = useState(true);
  const [showType, setShowType] = useState(false);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dataFromAPI = await fetchData();
      setPokemon(dataFromAPI);
    };

    getData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = res.json();
    return data;
  };

  console.log(pokemon);

  const switchView = () => {
    setShowPokemon(!showPokemon);
    setShowType(!showType);
  };

  return (
    <div className="App">
      <Navbar onClick={switchView} />
      {showPokemon && <PokemonList pokemon={pokemon} />}
      {showType && <TypeList />}
    </div>
  );
}

export default App;
