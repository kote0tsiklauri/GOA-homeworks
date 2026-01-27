import { useId, useState } from "react";

function ColorList() {
  const baseId = useId();

  const [colors, setColors] = useState(["Red", "Green", "Blue"]);
  const [selected, setSelected] = useState([]);
  const [newColor, setNewColor] = useState("");

  // Toggle checkbox
  function handleToggle(color) {
    setSelected((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  }

  // Add new color
  function addColor() {
    if (newColor.trim() === "") return;
    setColors((prev) => [...prev, newColor]);
    setNewColor("");
  }

  return (
    <div>
      <h3>Favorite Colors</h3>

      {colors.map((color, index) => {
        const id = `${baseId}-${index}`;
        return (
          <div key={id}>
            <input
              type="checkbox"
              id={id}
              checked={selected.includes(color)}
              onChange={() => handleToggle(color)}
            />
            <label htmlFor={id}>{color}</label>
          </div>
        );
      })}

      <div style={{ marginTop: "1rem" }}>
        <input
          type="text"
          placeholder="Add new color"
          value={newColor}
          onChange={(e) => setNewColor(e.target.value)}
        />
        <button type="button" onClick={addColor}>
          Add
        </button>
      </div>

      <p style={{ marginTop: "1rem" }}>
        <span style={{ fontWeight: 600 }}>Selected:</span>{" "}
        {selected.length > 0 ? selected.join(", ") : "None"}
      </p>
    </div>
  );
}

export default ColorList;