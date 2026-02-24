
import "./App.css"

import { useReducer } from "react";
import { products } from "./data/Products";
import { reducer } from "./reducers/productReducer";
import CategorySelect from "./components/CategorySelect";
import PriceSelect from "./components/PriceSelect";
import SearchInput from "./components/SearchInput";
import ProductForm from "./components/ProductForm";
import ProductItem from "./components/ProductItem";


export default function App() {
  const [state, dispatch] = useReducer(reducer, {
    products,
    items: products,
    categoryFilter: "All",
    priceFilter: "All",
    searchQuery: "",
  });

  return (
    <div className="container">
      <h1>Product Management</h1>

      <div className="controls">
        <SearchInput search={state.searchQuery} dispatch={dispatch} />
        <CategorySelect category={state.categoryFilter} dispatch={dispatch} />
        <PriceSelect priceRange={state.priceFilter} dispatch={dispatch} />
      </div>

      <ProductForm dispatch={dispatch} />

      <h3>
        Current filters: <strong>{state.categoryFilter}</strong>,{" "}
        <strong>{state.priceFilter}</strong>, <strong>{state.searchQuery}</strong>
      </h3>

      <div className="product-list">
        {state.items.map((product) => (
          <ProductItem key={product.id} product={product} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}