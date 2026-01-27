import { useState } from "react";

function LiveInput() {
  const [text, setText] = useState("");

  return (
    <div className="p-4 border rounded-lg w-fit">
      <input
        className="border px-2 py-1 rounded mb-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type..."
      />
      <p className="text-gray-700">{text}</p>
    </div>
  );
}

export default LiveInput;