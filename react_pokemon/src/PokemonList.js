import React from "react";
import Tilty from "react-tilty";

export default function PokemonList({ pokemons, details, onClick, page }) {
  const prevPg = () => {
    onClick(-1);
  };

  const nextPg = () => {
    onClick(1);
  };

  const homePg = () => {
    onClick(0);
  };

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
        {page !== 1 && <div className="previous-page" onClick={prevPg}></div>}
        <img
          className="pokeball"
          src="./pokeball.png"
          alt="Jump to first page"
          onClick={homePg}
        ></img>
        <div className="next-page" onClick={nextPg}></div>
      </div>
    </div>
  );
}
