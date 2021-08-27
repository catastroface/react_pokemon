import React from "react";
import Tilty from "react-tilty";

export default function PokemonList({ pokemons, details }) {
  return (
    <div className="content_window">
      <div className="cards">
        {pokemons.map((pokemon) => (
          <Tilty
            perspective={1500}
            style={{ transformStyle: "preserve-3d" }}
            glare="true"
            maxGlare="1"
          >
            {details[pokemon.url] && (
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
