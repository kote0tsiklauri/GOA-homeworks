import { useState, useMemo } from "react";

export function TodoCount() {
  const [todos] = useState([
    { text: "Learn React", completed: false },
    { text: "Do Homework", completed: true },
    { text: "Go Shopping", completed: false },
  ]);

  const total = useMemo(() => todos.length, [todos]);

  return (
    <div>
      <h3>Todo Count</h3>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t.text}</li>
        ))}
      </ul>
      <p>Total Todos: {total}</p>
    </div>
  );
}