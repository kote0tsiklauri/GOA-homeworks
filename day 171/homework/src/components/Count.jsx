import { useState, useRef, useEffect } from "react";

export const Count = () => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    const handleClick = () => {
        setCount(prev => prev + 1);
    };

    useEffect(() => {
        countRef.current = count;
    }, [count]);

    return (
        <div>
            <p>Current: {count}</p>
            <p>Previous: {countRef.current}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
};