import { Link } from "react-router-dom";
import fetchData from "./fetchData";
import { useState, useEffect } from "react";

export default function PokemonDetails(props) {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const id = props.match.params.id;
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetchData(url).then((result) => {
      try {
        setDetails(result.data);
      } catch (TypeError) {
        console.error(TypeError);
        console.log("Check if there is a Pokémon with the given ID");
      }
    });
  }, [props.match.params.id]);

  return (
    <div className="content_window details-content">
      {details.sprites ? (
        <>
          <div>
            <img
              src={`${details.sprites.other["official-artwork"]["front_default"]}`}
              alt={details.name}
            />
          </div>
          <div className="pokemon-info">
            <h1>{details.name}</h1>
            <h2>Types</h2>
            <ul>
              {details.types.map((type) => (
                <li>{type.type.name}</li>
              ))}
            </ul>
            <h2>Height</h2>
            <p>{`${parseInt(details.height) / 10} m`}</p>
            <h2>Weight</h2>
            <p>{`${parseInt(details.weight) / 10} kg`}</p>
          </div>
        </>
      ) : (
        <>
          <h2>No Pokémon avaliable with the given name :/</h2>
        </>
      )}
      <Link to="/">
        <div className="back-button"></div>
      </Link>
    </div>
  );
}
