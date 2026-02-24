import { useState, useMemo } from "react";

export function SumTwoNumbers() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const sum = useMemo(() => Number(num1) + Number(num2), [num1, num2]);

  return (
    <div>
      <h3>Sum Two Numbers</h3>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <p>Sum: {sum}</p>
    </div>
  );
}