import { useContext } from "react";
import { AddToCartContext } from '../context/CartContext.jsx';
import {data} from '../data.js'


export function Shop() {
  const { addToCart } = useContext(AddToCartContext);

  return (
    <>
      <div className="Shop">{data.map(item => (
        <div key={item.id} style={{width:"auto", margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <img src={item.imageUrl} alt={item.name} style={{ width: '200px', height: '200px', }} />
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <p>Rating: {item.rating}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}</div>
    </>
  )
}
