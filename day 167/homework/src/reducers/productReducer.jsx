export function reducer(state, action) {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        categoryFilter: action.payload,
        items: state.products.filter(p =>
          action.payload === "All" ? true : p.category === action.payload
        )
      };
    case "SET_PRICE":
      return {
        ...state,
        priceFilter: action.payload,
        items: state.products.filter(p => {
          if (action.payload === "All") return true;
          if (action.payload === "Price:0-100") return p.price <= 100;
          if (action.payload === "Price:100-500") return p.price > 100 && p.price <= 500;
          if (action.payload === "Price:500+") return p.price > 500;
        })
      };
    case "SEARCH":
      return {
        ...state,
        searchQuery: action.payload,
        items: state.products.filter(p =>
          p.name.toLowerCase().includes(action.payload.toLowerCase())
        )
      };
    case "ADD_PRODUCT":
      const newProducts = [...state.products, action.payload];
      return { ...state, products: newProducts, items: newProducts };
    case "DELETE_PRODUCT":
      const filtered = state.products.filter(p => p.id !== action.payload);
      return { ...state, products: filtered, items: filtered };
    case "CHANGE_STOCK":
      const toggled = state.products.map(p =>
        p.id === action.payload.id ? { ...p, stock: action.payload.stock } : p
      );
      return { ...state, products: toggled, items: toggled };
    default:
      return state;
  }
}