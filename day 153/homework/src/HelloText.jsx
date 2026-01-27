import { useState } from "react";

function HelloText() {
  const [text, setText] = useState("Hello");

  return (
    <div className="p-4 border rounded-lg w-fit">
      <p className="text-lg mb-2">{text}</p>
      <button
        className="px-4 py-1 bg-blue-500 text-white rounded"
        onClick={() => setText("Hello React")}
      >
        Change
      </button>
    </div>
  );
}

export default HelloText;