import { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(props.initial);

  const addFive = () => {
    setCount(count + 5);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={addFive}>+5</button>
    </div>
  );
}

export default Counter;