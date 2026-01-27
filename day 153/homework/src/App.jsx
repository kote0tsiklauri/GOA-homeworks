import { useState } from 'react'
import Counter from "./Counter";
import HelloText from "./HelloText";
import Toggle from "./Toggle";
import LiveInput from "./LiveInput";


function App() {
  return (
    <div>
      <Counter />
      <HelloText />
      <Toggle />
      <LiveInput />
    </div>
  );
}

export default App;
