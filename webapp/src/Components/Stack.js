import '../CSS/Stack.css';
function Stack({image, name}) {
  return (
    <div className="stack">
        <img src={image} alt={name} />
        <h2>{name}</h2>
    </div>
  );
}


export default Stack;