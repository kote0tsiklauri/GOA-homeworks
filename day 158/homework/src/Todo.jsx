import { useEffect, useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const notCompletedTodos = data.filter((todo) => todo.completed === false);
        setTodos(notCompletedTodos);
      })
      .catch((error) => {
        console.error("There was a problem fetching todos:", error);
      })
      .finally(() => {
        console.log("Fetch attempt finished (success or failure)");
      });
  }, []);

  return (
    <div>
      <h1>Incomplete Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;