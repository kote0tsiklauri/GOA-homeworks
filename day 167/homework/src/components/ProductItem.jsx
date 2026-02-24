import {useState} from "react";
export default function ProductItem({ product, dispatch }) {
  const [newStock, setNewStock] = useState(product.stock);

  const handleStockChange = (e) => {
    setNewStock(e.target.value);
  };

  const handleUpdateStock = () => {
    dispatch({ type: "CHANGE_STOCK", payload: { id: product.id, stock: parseInt(newStock) } });
  };

  return (
    <div className="product-item">
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>In Stock: {product.stock} items</p>
      <input type="number" placeholder="Change stock" onChange={handleStockChange} value={newStock}/>
      <button onClick={handleUpdateStock}>Update Stock</button>
      <button onClick={() => dispatch({ type: "DELETE_PRODUCT", payload: product.id })}>Delete</button>
    </div>
  );
}