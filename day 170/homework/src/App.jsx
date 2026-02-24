import React, { useState, useRef } from "react";

export default function App() {
  // 1  focus
  const inputRef = useRef(null);

  // 2  color change
  const textRef = useRef(null);

  // 3 width change
  const [width, setWidth] = useState(150);

  // 4 clear input
  const [inputValue, setInputValue] = useState("");

  // 5 hide paragraph
  const [isHidden, setIsHidden] = useState(false);

  // 6 scroll
  const scrollRef = useRef(null);

  return (
    <div style={{ padding: "20px" }}>
      {/* 1 */}
      
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>
        Focus
      </button>

      {/* 2 */}
      
      <p ref={textRef}>ეს ტექსტი შეიცვლის ფერს</p>
      <button
        onClick={() => {
          textRef.current.style.color = "red";
        }}
      >
        ფერის შეცვლა
      </button>

      {/* 3 */}
      
      <div
        style={{
          width: width + "px",
          height: "80px",
          background: "lightblue",
          transition: "0.3s",
        }}
      />
      <button onClick={() => setWidth(300)}>
        სიგანის შეცვლა
      </button>

      {/* 4 */}
      
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => setInputValue("")}>
        გასუფთავება
      </button>

      {/* 5 */}
      
      {!isHidden && <p>ეს პარაგრაფი გაქრება</p>}
      <button onClick={() => setIsHidden(true)}>
        დამალვა
      </button>

      
      <div
        ref={scrollRef}
        style={{
          width: "200px",
          height: "100px",
          overflowY: "scroll",
          border: "1px solid black",
        }}
      >
        <div style={{ height: "400px" }}>
          ბევრი ტექსტი აქაა <br />
          სქროლე ან დააჭირე ღილაკს ↓ <br /><br />
          ბოლოში ჩამოსასვლელად გაკეთებულია ეს სივრცე 🙂
        </div>
      </div>
      <button
        onClick={() =>
          (scrollRef.current.scrollTop =
            scrollRef.current.scrollHeight)
        }
      >
        ქვემოთ სქროლი
      </button>
    </div>
  );
}