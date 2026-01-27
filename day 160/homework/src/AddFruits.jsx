import { useId, useState } from "react";

function AddFruits() {
  const baseId = useId();
  const [fruits, setFruits] = useState(["Apple", "Banana"]);
  const [input, setInput] = useState("");

  function addFruit() {
    if (input.trim() === "") return;

    setFruits((prev) => [...prev, input]);
    setInput("");
  }

  return (
    <div>
      <h3>Fruits</h3>

      {fruits.map((fruit, index) => {
        const id = `${baseId}-${index}`;

        return (
          <div key={id}>
            <input type="checkbox" id={id} />
            <label htmlFor={id}>{fruit}</label>
          </div>
        );
      })}

      <input
        type="text"
        placeholder="Add new fruit"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="button" onClick={addFruit}>
        Add
      </button>
    </div>
  );
}

export default AddFruits;
