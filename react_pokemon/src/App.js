import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import PokemonList from "./PokemonList";
import TypeList from "./TypeList";
import fetchData from "./fetchData";
import PokemonDetails from "./PokemonDetails";

function App() {
  const [showPokemon, setShowPokemon] = useState(true);
  const [showType, setShowType] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getPokemonDataByPage(1);
    fetchData("https://pokeapi.co/api/v2/type?limit=18").then((result) => {
      setTypes(result.data.results);
    });
  }, []);

  const switchView = () => {
    setShowPokemon(!showPokemon);
    setShowType(!showType);
  };

  const getPokemonDataByPage = (page) => {
    const offset = (parseInt(page) - 1) * 8;
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=8`;
    fetchData(url).then((result) => {
      setPokemons(result.data.results);
      result.data.results.forEach((pokemon) => {
        fetchData(pokemon.url).then((details) => {
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
    } else if (parseInt(step) === 0) {
      getPokemonDataByPage(1);
    } else {
      getPokemonDataByPage(currentPage + step);
    }
  };

  return (
    <Router>
      <div className="App">
        <Route
          path="/"
          exact
          render={() => (
            <>
              <Navbar onClick={switchView} />
              {showPokemon && (
                <PokemonList
                  pokemons={pokemons}
                  details={pokemonDetails}
                  onClick={changePage}
                  page={currentPage}
                />
              )}
              {showType && <TypeList types={types} />}
            </>
          )}
        />
      </div>
      <Route
        path={`/pokemon/:id`}
        render={(props) => <PokemonDetails {...props} />}
        exact
      ></Route>
    </Router>
  );
}

export default App;
