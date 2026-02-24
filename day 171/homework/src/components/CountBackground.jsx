import { useState, useRef, useEffect } from "react";

export const CountBackground = () => {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

    useEffect(() => {
        prevCountRef.current = count;
    }, [count]);

    const handleClick = () => {
        setCount(prev => prev + 1);
    };

    const currentColor = count % 2 === 0 ? "blue" : "green";
    const prevColor = prevCountRef.current % 2 === 0 ? "blue" : "green";

    return (
        <div>
            <button onClick={handleClick}>Increment</button>

            <p style={{ 
                backgroundColor: currentColor,
                color: "white",
                padding: "10px"
            }}>
                Current Count: {count}
            </p>

            <p style={{ 
                backgroundColor: prevColor,
                color: "white",
                padding: "10px"
            }}>
                Previous Count: {prevCountRef.current}
            </p>
        </div>
    );
};