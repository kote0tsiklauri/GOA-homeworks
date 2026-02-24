import { useContext } from 'react';
import  {AddToCartContext}  from '../context/CartContext';


export const Cart = () => {
  const { cart,itemQuantity,removefromCart,wholePrice} = useContext(AddToCartContext);

  return (
    <div>

        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
            <p>Your cart is empty.</p>
        ) : (
            cart.map(item => (
            <div key={item.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px' }}>
                <img
                src={item.imageUrl}
                alt={item.name}
                style={{ width: '200px', height: '200px' }}
                />
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Rating: {item.rating}</p>
                <p>Bought: {item.quantity}</p>
                <button onClick={() => removefromCart(item)}>Remove</button>
            </div>
            ))
        )}

        <p>you bought {itemQuantity} items</p>
        <p>price: {wholePrice}</p>
        
        
    </div>
  );
};