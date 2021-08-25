export default function Header({ onClick }) {
  return (
    <div className="page_controls" onClick={onClick}>
      <div className="active-page" id="pokemon-nav">
        <h3>Pokémon</h3>
      </div>
      <div>
        <h3 id="type-nav">Type</h3>
      </div>
    </div>
  );
}
