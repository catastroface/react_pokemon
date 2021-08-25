export default function PokemonList({ pokemons }) {
  return (
    <div className="content_window">
      <div className="cards">
        {pokemons.map((pokemon) => (
          <div>
            <h3>{pokemon.name}</h3>
          </div>
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
