import { useState } from "react";

function LivePreview() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write something..."
      />
      <p>{text}</p>
    </div>
  );
}

export default LivePreview;