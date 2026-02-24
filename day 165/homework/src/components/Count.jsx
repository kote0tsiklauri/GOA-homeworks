import { useReducer } from "react";
// 1)შექმენი მარტივი ქაუნთერი useReducer-ის გამოყენებით, სადაც იქნება ორი ღილაკი – გაზრდა (+1) და შემცირება (-1).
// 2) გააკეთე ქაუნთერი, რომელსაც ექნება სამი action: გაზრდა, შემცირება და reset (რიცხვის დაბრუნება 0-ზე).
const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}
export default function Count() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}