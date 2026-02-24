import { useState } from "react";
export default function CartSummary() {
  const [cart, setCart] = useState([
    { name: "Apple", price: 1, quantity: 3 },
    { name: "Bread", price: 3, quantity: 2 },
    { name: "Milk", price: 4, quantity: 1 },
    { name: "Eggs", price: 5, quantity: 2 },
    { name: "Banana", price: 2, quantity: 5 },
  ]);

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.name}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total quantity: {totalQuantity}</p>
      <p>Total amount: ${totalAmount}</p>
    </div>
  );
}