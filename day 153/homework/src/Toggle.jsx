import { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="p-4 border rounded-lg w-fit">
      <p className="text-xl font-semibold mb-2">
        {isOn ? "ON" : "OFF"}
      </p>
      <button
        className="px-4 py-1 bg-purple-500 text-white rounded"
        onClick={() => setIsOn(!isOn)}
      >
        Toggle
      </button>
    </div>
  );
}

export default Toggle;