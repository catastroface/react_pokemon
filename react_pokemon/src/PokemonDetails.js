import { Link } from "react-router-dom";
import fetchData from "./fetchData";
import { useState, useEffect } from "react";

export default function PokemonDetails(props) {
  const [details, setDetails] = useState([]);
  const id = props.match.params.id;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  useEffect(() => {
    fetchData(url).then((result) => {
      setDetails(result.data);
    });
  }, []);

  return (
    <div className="content_window details-content">
      {details.sprites && (
        <>
          <div>
            <img
              src={`${details.sprites.other["official-artwork"]["front_default"]}`}
              alt={details.name}
            />
          </div>
          <div>
            <h1>{details.name}</h1>
            <h2>Types</h2>
            <ul>
              {details.types.map((type) => (
                <li>{type.type.name}</li>
              ))}
            </ul>
            <h2>Height</h2>
            <p>{details.height}</p>
            <h2>Weight</h2>
            <p>{details.weight}</p>
          </div>
        </>
      )}
      <Link to="/">Go back</Link>
    </div>
  );
}