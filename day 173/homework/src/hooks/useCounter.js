import {useState} from 'react';

export const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);
    const reset = () => setCount(initialValue);
    
    if(count < 0) {
        setCount(0);
    }


    return { count, increment, decrement, reset };
}