import { useReducer,} from "react";


function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "reset":
        return { count: 0 };
    default:
      throw new Error();
  }
}

export default function VariableCounter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>+1</button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>+5</button>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>+10</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}