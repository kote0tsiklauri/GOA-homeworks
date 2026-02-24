import { useMemo } from "react";

export function ProductTotal() {
  const products = [
    { name: "Apple", price: 1.5 },
    { name: "Banana", price: 2 },
    { name: "Orange", price: 1.2 },
  ];

  const totalPrice = useMemo(
    () => products.reduce((sum, p) => sum + p.price, 0),
    [products]
  );

  return (
    <div>
      <h3>Product Total Price</h3>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
}