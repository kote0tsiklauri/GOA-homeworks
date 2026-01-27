import { useId, useState } from "react";

function FavoriteColors() {
  const colors = ["Red", "Green", "Blue", "Black"];

  const ids = colors.map(() => useId());
  const [selected, setSelected] = useState([]);

  function handleChange(color) {
    setSelected((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color): [...prev, color]
    );
  }

  return (
    <div>
      <h3>Favorite Colors</h3>

      {colors.map((color, index) => (
        <div key={color}>
          <input
            type="checkbox"
            id={ids[index]}
            checked={selected.includes(color)}
            onChange={() => handleChange(color)}
          />
          <label htmlFor={ids[index]}>{color}</label>
        </div>
      ))}

      <p>
        <span className="selected-label">Selected:</span>{" "}
        {selected.length > 0 ? selected.join(", ") : "None"}
      </p>
    </div>
  );
}

export default FavoriteColors;