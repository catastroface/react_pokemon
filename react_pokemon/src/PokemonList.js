export default function PokemonList({ pokemon }) {
  return (
    <div className="content_window">
      <div className="cards">
        <div>{/* <h2>{pokemon.results[0].name}</h2> */}</div>
        <div>{/* <h2>{pokemon.results[1].name}</h2> */}</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="pagination">
        <div className="previous_page"></div>
        <img src="./public/pokeball.png" alt=""></img>
        <div className="next_page"></div>
      </div>
    </div>
  );
}
