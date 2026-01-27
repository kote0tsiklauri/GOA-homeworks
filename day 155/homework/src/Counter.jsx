import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded-lg w-fit space-x-2">
      <p className="text-xl font-bold mb-2">Count: {count}</p>
      <button
        className="px-3 py-1 bg-green-500 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        +1
      </button>
      <button
        className="px-3 py-1 bg-red-500 text-white rounded"
        onClick={() => setCount(count - 1)}
      >
        -1
      </button>
      <button
        className="px-3 py-1 bg-red-900 text-white rounded"
        onClick={() => setCount(0)}
      >
        reset
      </button>
    </div>
  );
}

export default Counter;