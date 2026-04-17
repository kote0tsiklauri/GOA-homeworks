import { useState, useEffect, useRef } from "react";

const useThrottle = (value, delay) => {
    const [throttled, setThrottled] = useState(value);
    const lastRun = useRef(Date.now());

    useEffect(() => {
        const handler = setTimeout(() => {
        if (Date.now() - lastRun.current >= delay) {
            setThrottled(value);
            lastRun.current = Date.now();
        }
        }, delay - (Date.now() - lastRun.current));

        return () => clearTimeout(handler);
    }, [value, delay]);

    return throttled;
};

export default useThrottle;