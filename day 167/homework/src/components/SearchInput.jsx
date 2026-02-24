export default function SearchInput({ search, dispatch }) {
  return (
    <input
        className="input"
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={e => dispatch({ type: "SEARCH", payload: e.target.value })}
    />
  );
}