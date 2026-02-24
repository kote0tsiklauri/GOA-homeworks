import { useState } from "react";

export default function ProductForm({ dispatch }) {
  const [newProduct, setNewProduct] = useState({ id: "", name: "", price: 0, stock: 0, category: "" });

  const handleAdd = () => {
    if (!newProduct.id || !newProduct.name) return;
    dispatch({ type: "ADD_PRODUCT", payload: newProduct });
    setNewProduct({ id: "", name: "", price: 0, stock: 0, category: "" });
  };

  return (
    <div className="product-form">
      <input placeholder="ID" value={newProduct.id} onChange={e => setNewProduct({ ...newProduct, id: e.target.value })} />
      <input placeholder="Name" value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} />
      <label htmlFor="price">Price:</label>
      <input id="price" type="number" placeholder="Price" value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: Number(e.target.value) })} />
      <label htmlFor="stock">Stock:</label>
      <input id="stock" type="number" placeholder="Stock" value={newProduct.stock} onChange={e => setNewProduct({ ...newProduct, stock: Number(e.target.value) })} />
      <input placeholder="Category" value={newProduct.category} onChange={e => setNewProduct({ ...newProduct, category: e.target.value })} />
      <button onClick={handleAdd}>Add Product</button>
    </div>
  );
}