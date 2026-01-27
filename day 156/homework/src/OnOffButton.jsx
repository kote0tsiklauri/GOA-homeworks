import { useState } from "react";

function OnOffButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      className={`px-4 py-2 rounded font-bold text-white ${
        isOn ? "bg-green-500" : "bg-red-500"
      }`}
      onClick={() => setIsOn(!isOn)}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default OnOffButton;
