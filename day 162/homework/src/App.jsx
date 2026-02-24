import { useState } from 'react'
import './App.css'

// 1
import text from "./contexts/Context";
import Example1Child from './components/provider';

// 2
import number from "./contexts/NumContext";
import NumProvider from './components/NumDisplay';

// 3
import color from "./contexts/ColorContext";
import ColoredText from './components/ColoredText';

// 4
import object from "./contexts/ObjextContext";
import ShowName from './components/ObjectName'; 
// 5
import IsOn from "./contexts/SwitchContext";
import SwitchComponent from './components/SwitchComponent';
// 6
import ButtonText from "./contexts/ButtonTextContext";
import ClickButton from './components/ClickButton'; 



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* 1 */}
      <text.Provider value="Hello from Context!">
        <Example1Child />
      </text.Provider>

      {/* 2 */}
      <number.Provider value={10}>
        <NumProvider />
      </number.Provider>

      {/* 3 */}
      <color.Provider value="red">
        <ColoredText />
      </color.Provider>

      {/* 4 */}
      <object.Provider value={{ name: "Giga" }}>
        <ShowName />
      </object.Provider>
      {/* 5 */}
      <IsOn.Provider value={true}>
        <SwitchComponent />
      </IsOn.Provider>

      {/* 6 */}
      <ButtonText.Provider value="Click Me">
        <ClickButton />
      </ButtonText.Provider>
    </>
  )
}

export default App
