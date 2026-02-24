import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { task: "Wash dishes", priority: "low" },
    { task: "Finish project", priority: "high" },
    { task: "Buy groceries", priority: "medium" },
    { task: "Pay bills", priority: "high" },
    { task: "Call mom", priority: "low" },
    { task: "Exercise", priority: "medium" },
  ]);

  const highPriority = todos.filter((t) => t.priority === "high");
  const highCount = highPriority.length;

  return (
    <div>
      <h3>All tasks</h3>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>
            {t.task} ({t.priority})
          </li>
        ))}
      </ul>

      <ul>
        {highPriority.map((t, i) => (
          <li key={i}>{t.task}</li>
        ))}
      </ul>
    </div>
  );
}