import { useState } from "react";   

function ShoppingListAdvanced() {
  const [product, setProduct] = useState("");
  const [items, setItems] = useState([]);

  const addProduct = () => {
    if (!product.trim()) return;

    setItems([
      ...items,
      { id: Date.now(), name: product, count: 1 }
    ]);
    setProduct("");
  };

  const increase = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, count: item.count + 1 }
          : item
      )
    );
  };

  const decrease = (id) => {
    setItems(
      items.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const remove = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <input
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        placeholder="Product"
      />
      <button onClick={addProduct}>Add</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} — {item.count}
            <button onClick={() => increase(item.id)}>+</button>
            <button onClick={() => decrease(item.id)}>-</button>
            <button onClick={() => remove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingListAdvanced;