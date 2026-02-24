import { useReducer, useState, useEffect } from "react";

// Reducer
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "remove":
      return state.filter((item) => item.id !== action.payload.id);

    case "complete":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, completed: !item.completed }
          : item
      );

    case "edit":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.text }
          : item
      );

    case "clear":
      return [];

    default:
      throw new Error("Unknown action type");
  }
}

export default function ToDo() {
  const [state, dispatch] = useReducer(reducer, [], (initial) => {
    // Load from localStorage
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : initial;
  });

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all"); // all / completed / active

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  const handleChange = (e) => setInput(e.target.value);

  const addTodo = () => {
    if (input.trim() === "") return;
    dispatch({
      type: "add",
      payload: {
        id: Date.now(),
        text: input,
        completed: false,
      },
    });
    setInput("");
  };

  const filteredTodos = state.filter((item) => {
    if (filter === "completed") return item.completed;
    if (filter === "active") return !item.completed;
    return true; // all
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo App</h2>

      {/* Input */}
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={addTodo}>Add</button>

      {/* Filter */}
      <div style={{ margin: "10px 0" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("active")}>Active</button>
      </div>

      {/* Todos */}
      <ul>
        {filteredTodos.map((item) => (
          <li key={item.id} style={{ marginBottom: "5px" }}>
            <span
              onClick={() =>
                dispatch({ type: "complete", payload: { id: item.id } })
              }
              style={{
                textDecoration: item.completed ? "line-through" : "none",
                cursor: "pointer",
                marginRight: "10px",
              }}
            >
              {item.text}
            </span>
            <button
              onClick={() => {
                const newText = prompt("Edit todo:", item.text);
                if (newText) {
                  dispatch({
                    type: "edit",
                    payload: { id: item.id, text: newText },
                  });
                }
              }}
            >
              Edit
            </button>
            <button
              onClick={() => dispatch({ type: "remove", payload: { id: item.id } })}
              style={{ marginLeft: "5px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <p>Total Todos: {state.length}</p>

      <button onClick={() => dispatch({ type: "clear" })}>Clear All</button>
    </div>
  );
}