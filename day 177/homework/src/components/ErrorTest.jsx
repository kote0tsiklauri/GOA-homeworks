import { useState } from "react";

const BuggyComponent = () => {
  const [crash, setCrash] = useState(false);

  if (crash) {
    throw new Error("Crash triggered!");
  }

  return (
    <div>
      <button onClick={() => setCrash(true)}>
        Trigger Error
      </button>
    </div>
  );
};