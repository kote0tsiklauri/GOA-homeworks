import { useMemo } from "react";

export function CompletedTodos({ todos }) {
  const completedCount = useMemo(
    () => todos.filter((t) => t.completed).length,
    [todos]
  );

  return (
    <div>
      <h3>Completed Todos</h3>
      <p>Completed: {completedCount}</p>
    </div>
  );
}