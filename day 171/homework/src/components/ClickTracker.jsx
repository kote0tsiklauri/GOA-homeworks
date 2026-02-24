import { useState, useRef } from "react";

export const ClickTracker = () => {
    const [count, setCount] = useState(0);
    const totalClicksRef = useRef(0);

    const handleClick = () => {
        setCount(prev => prev + 1);

        totalClicksRef.current += 1;
        console.log("Total Clicks: ", totalClicksRef.current);
    };

    return (
        <div>
            <p>Visible Count: {count}</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};