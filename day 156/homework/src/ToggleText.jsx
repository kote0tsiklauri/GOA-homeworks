import { useState } from "react";

function ToggleText() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="p-4 border rounded-lg w-fit space-y-2">
      {visible && <p className="text-lg">Hello! I am visible</p>}
      <button
        className="px-4 py-1 bg-purple-500 text-white rounded"
        onClick={() => setVisible(!visible)}
      >
        Toggle Text
      </button>
    </div>
  );
}

export default ToggleText;