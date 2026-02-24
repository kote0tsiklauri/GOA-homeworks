export default function PriceSelect({ priceRange, dispatch }) {
  return (
    <select className="select" value={priceRange} onChange={e => dispatch({ type: "SET_PRICE", payload: e.target.value })}>
      <option value="All">All</option>
      <option value="Price:0-100">0-100</option>
      <option value="Price:100-500">100-500</option>
      <option value="Price:500+">500+</option>
    </select>
  );
}