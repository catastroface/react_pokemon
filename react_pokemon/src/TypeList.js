import Tilty from "react-tilty";

export default function TypeList({ types }) {
  return (
    <div className="content_window">
      <div class="types">
        {types.map((type) => (
          <Tilty perspective={1500} style={{ transformStyle: "preserve-3d" }}>
            <div className={`type ${type.name}`}>
              <h2>{type.name}</h2>
            </div>
          </Tilty>
        ))}
      </div>
    </div>
  );
}
