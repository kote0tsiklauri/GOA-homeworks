import LivePreview from "./LivePreview";
import FruitsList from "./FruitsList";
import ShoppingList from "./ShoppingList";
import ShoppingListAdvanced from "./ShoppingListAdvanced";
import TodoList from "./TodoList";

function App() {
  return (
    <div style={{ padding: "20px" }}>

      <hr />
      <h2>1 Live Preview</h2>
      <LivePreview />

      <hr />
      <h2>2 Fruits List</h2>
      <FruitsList />

      <hr />
      <h2>3 Todo List</h2>
      <TodoList />

      <hr />
      <h2>4 Shopping List</h2>
      <ShoppingList />

      <hr />
      <h2>5 Shopping List Advanced</h2>
      <ShoppingListAdvanced />
    </div>
  );
}

export default App;
