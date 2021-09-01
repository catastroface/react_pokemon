import React, { useState } from "react";
import Tilty from "react-tilty";
import { Link } from "react-router-dom";

export default function PokemonList({ pokemons, details, onClick, page }) {
  const [searchValue, setSearchValue] = useState("");

  const prevPg = () => {
    onClick(-1);
  };

  const nextPg = () => {
    onClick(1);
  };

  const displaySearch = () => {
    document.getElementById("search").classList.toggle("active_search");
  };

  const updateSearchValue = () => {
    setSearchValue(document.getElementById("search_input").value.toLowerCase());
  };

  return (
    <div className="content_window">
      <div className="cards">
        {pokemons.map((pokemon) => (
          <Tilty
            key={pokemon.url}
            perspective={1500}
            style={{ transformStyle: "preserve-3d" }}
          >
            {details[pokemon.url] && (
              <Link to={`/pokemon/${details[pokemon.url].id}`}>
                <div
                  style={{
                    backgroundImage: `url("${
                      details[pokemon.url].sprites.other["official-artwork"][
                        "front_default"
                      ]
                    }")`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    transform: "translateZ(15px)",
                  }}
                  className={`card ${details[pokemon.url].types[0].type.name}`}
                >
                  <div className="card-content">
                    <h2>{pokemon.name}</h2>
                  </div>
                </div>
              </Link>
            )}
          </Tilty>
        ))}
      </div>
      <div className="pagination">
        {page !== 1 ? (
          <div className="previous-page visible" onClick={prevPg}></div>
        ) : (
          <div className="previous-page" onClick={prevPg}></div>
        )}
        <img
          className="pokeball"
          src="./pokeball.png"
          alt="Jump to first page"
          onClick={displaySearch}
        ></img>
        <div className="next-page" onClick={nextPg}></div>
        <div className="search" id="search">
          <input id="search_input" onInput={updateSearchValue}></input>
          <Link to={`/pokemon/${searchValue}`}>
            <div className="search_btn"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
