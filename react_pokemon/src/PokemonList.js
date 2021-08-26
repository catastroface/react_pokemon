import React from "react";
import Tilty from "react-tilty";

export default function PokemonList({ pokemons, details }) {
  return (
    <div className="content_window">
      <div className="cards">
        {pokemons.map((pokemon) => (
          <Tilty perspective={1500} style={{ transformStyle: "preserve-3d" }}>
            {details[pokemon.url] && (
              <div
                style={{
                  backgroundImage: `url("${
                    details[pokemon.url].sprites.other["official-artwork"][
                      "front_default"
                    ]
                  }")`,
                  backgroundSize: "contain",
                  transform: "translateZ(15px)",
                }}
                className="card"
                id={pokemon.url}
              >
                <div className="card-content">
                  <h2>{pokemon.name}</h2>
                </div>
              </div>
            )}
          </Tilty>
        ))}
      </div>
      <div className="pagination">
        <div className="previous-page"></div>
        <img className="pokeball" src="./pokeball.png" alt=""></img>
        <div className="next-page"></div>
      </div>
    </div>
  );
}
