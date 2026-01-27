import { useState } from "react";

function ShoppingList() {
  const [product, setProduct] = useState("");
  const [items, setItems] = useState([]);

  const addProduct = () => {
    if (product.trim() === "") return;

    setItems([
      ...items,
      { id: Date.now(), name: product, count: 1 }
    ]);

    setProduct("");
  };

  const removeProduct = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <input
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        placeholder="Product name"
      />
      <button onClick={addProduct}>Add</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} ({item.count})
            <button onClick={() => removeProduct(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;