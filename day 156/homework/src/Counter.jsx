import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded-lg w-fit">
      <p className="text-xl mb-2">Count: {count}</p>
      <button
        className="px-4 py-1 bg-blue-500 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        +1
      </button>
    </div>
  );
}

export default Counter;