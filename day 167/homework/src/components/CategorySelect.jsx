export default function CategorySelect({ category, dispatch }) {
  return (
    <select className="select" value={category} onChange={e => dispatch({ type: "SET_CATEGORY", payload: e.target.value })}>
      <option value="All">All</option>
      <option value="Electronics">Electronics</option>
      <option value="Clothing">Clothing</option>
      <option value="Home">Home</option>
      <option value="Accessories">Accessories</option>
      <option value="Stationery">Stationery</option>
    </select>
  );
}