import { useState, useMemo } from "react";

export function UsernameLength() {
  const [name, setName] = useState("");

  const length = useMemo(() => name.length, [name]);

  return (
    <div>
      <h3>Username Length</h3>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Length: {length} characters</p>
    </div>
  );
}