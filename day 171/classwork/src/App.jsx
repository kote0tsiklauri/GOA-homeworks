import { useState, useRef } from "react";
import "./App.css";

function App() {
  const divRef = useRef(null);
  const inputRef = useRef(null);
  const pRef = useRef(null);

  const [value, setValue] = useState("Hello World");
  const [highlight, setHighlight] = useState(false);

  return (
    <>
      <div
        ref={divRef}
        style={{ width: "100px", height: "100px", backgroundColor: "blue" }}
      ></div>
      <button onClick={() => divRef.current.style.backgroundColor = "red"}>
        change color
      </button>

      <input ref={inputRef} value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => inputRef.current.select()}>
        მონიშნე ყველაფერი
      </button>

      <p
        ref={pRef}
        style={{ backgroundColor: highlight ? "yellow" : "transparent", padding: "5px" }}
      >
        ეს არის ტექსტი რომელსაც მონიშვნა შეუძლია
      </p>

      <button
        onClick={() => {
          setHighlight(!highlight);
          pRef.current.style.backgroundColor = !highlight ? "yellow" : "transparent";
        }}
      >
        მონიშნე ტექსტი
      </button>
    </>
  );
}

export default App;