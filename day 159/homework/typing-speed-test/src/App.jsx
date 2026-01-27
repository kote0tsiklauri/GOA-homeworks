import { useState,useEffect } from 'react'
import data from "../data.json";
import './App.css';



function App() {
  const [wpm, setWpm] = useState(0);
  const [time, setTime] = useState(0);
  const [acuracy, setAcuracy] = useState(0);
  const [difficulty, setDifficulty] = useState("easy");

  const getRandomText = () => {
    const list = data[difficulty];
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex].text;
  };


  const [text, setText] = useState(getRandomText());

  useEffect(() => {
    setText(getRandomText());
  }, [difficulty]);

  const startTimer = () => {
    setTime(60);
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          // Here you can also calculate final WPM and accuracy
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
    
  }

  return (
    <>

      <div>
        <div>wpm: {wpm}</div>
        <div>time: {time}</div>
        <div>acuracy: {acuracy}</div>
      </div>
      
      <div>
        <div>difficulty:</div>
        <button onClick={() => setDifficulty("easy")}>easy</button>
        <button onClick={() => setDifficulty("medium")}>medium</button>
        <button onClick={() => setDifficulty("hard")}>hard</button>
      </div>

      <div>
        <p>mode:</p>
        <button onClick={() => startTimer()}>timed(60s)</button>
        <button onClick={() => setTime(0)}>passage</button>
      </div>

      <p>{text}</p>

      <input type="text" />
      
    </>
  );
}

export default App;