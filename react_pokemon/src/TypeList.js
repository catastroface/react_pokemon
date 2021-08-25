export default function TypeList({ types }) {
  console.log(types);
  return (
    <div className="content_window">
      {types.map((type) => (
        <div className="type">
          <h3>{type.name}</h3>
        </div>
      ))}
    </div>
  );
}
