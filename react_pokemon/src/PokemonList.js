export default function PokemonList({ pokemon }) {
  return (
    <div>
      <div>
        <h2>{pokemon.results[0].name}</h2>
      </div>
      <div>
        <h2>{pokemon.results[1].name}</h2>
      </div>
    </div>
  );
}
