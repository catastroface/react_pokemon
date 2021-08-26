import React from "react";
import Tilty from "react-tilty";

export default function PokemonList({ pokemons }) {
  return (
    <div className="content_window">
      <div className="cards">
        {pokemons.map((pokemon) => (
          <Tilty perspective={1500} style={{ transformStyle: "preserve-3d" }}>
            <div
              className="card"
              id={pokemon.url}
              style={{ transform: "translateZ(15px)" }}
            >
              <div className="card-content">
                <h3>{pokemon.name}</h3>
              </div>
            </div>
          </Tilty>
        ))}
      </div>
      <div className="pagination">
        <div className="previous_page"></div>
        <img src="./public/pokeball.png" alt=""></img>
        <div className="next_page"></div>
      </div>
    </div>
  );
}
