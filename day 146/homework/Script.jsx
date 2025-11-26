// 1) Hello → World
function HelloWorld() {
    const [text, setText] = React.useState("Hello");
    return (
        <div style={{ marginBottom: "20px" }}>
            <h2>{text}</h2>
            <button onClick={() => setText(perv => perv == "Hello" ? "World" : "Hello")}>Change Hello → World</button>
        </div>
        
    );
}

// 2–6) Counter (+, –, Reset)
function Counter() {
    const [count, setCount] = React.useState(0);

    return (
        <div style={{ marginBottom: "20px" }}>
        <h2>Counter: {count}</h2>
        <button onClick={() => setCount(prev => prev + 1)}>+</button>
        <button onClick={() => setCount(prev => prev - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
    }

// 7) Hide / Show Text
    function ToggleText() {
        const [visible, setVisible] =React.useState(true);

    return (
        <div style={{ marginBottom: "20px" }}>
        {visible && <h2>This text can hide or show</h2>}

        <button onClick={() => setVisible(perv => !perv)}>
            {visible ? "Hide" : "Show"}
        </button>
        </div>
    );
}

//combines all tasks
function App() {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>React Tasks (All in One Page)</h1>
        <HelloWorld />
        <Counter />
        <ToggleText />
        </div>
    );
}

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
