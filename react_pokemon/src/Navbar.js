export default function Header({ onClick }) {
  const switchView = () => {
    const pokemonNav = document.getElementById("pokemon-nav");
    const typeNav = document.getElementById("type-nav");

    pokemonNav.classList.toggle("active-page");
    typeNav.classList.toggle("active-page");
    onClick();
  };

  return (
    <div className="page_controls" onClick={switchView}>
      <div className="active-page" id="pokemon-nav">
        <h3>Pokémon</h3>
      </div>
      <div id="type-nav">
        <h3>Type</h3>
      </div>
    </div>
  );
}
