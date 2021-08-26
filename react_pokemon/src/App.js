import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import PokemonList from "./PokemonList";
import TypeList from "./TypeList";
import React from "react";
import axios from "axios";

function App() {
  const [showPokemon, setShowPokemon] = useState(true);
  const [showType, setShowType] = useState(false);
  const [data, setData] = useState([]);
  const [pokemonDetails, SetPokemonDetails] = useState([]);

  const api = axios.create({
    baseURL: `https://pokeapi.co/api/v2/pokemon?limit=8`,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (url) => {
    api
      .get(url)
      .then((result) => {
        setData(result.data.results);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const switchView = () => {
    if (!showType) {
      fetchData("https://pokeapi.co/api/v2/type?limit=18");
    } else {
      fetchData("/");
    }
    setShowPokemon(!showPokemon);
    setShowType(!showType);
  };

  console.log(data);

  return (
    <div className="App">
      <Navbar onClick={switchView} />
      {showPokemon && <PokemonList pokemons={data} />}
      {showType && <TypeList types={data} />}
    </div>
  );
}

export default App;
