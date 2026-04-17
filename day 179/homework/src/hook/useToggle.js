import { useState } from "react";

export const useToggle = (initialValue = false) => {
    const [value, setValue] = useState(initialValue);

    const toggle = () => {
        setValue(prev => !prev);
    };

    const setTrue = () => {
        setValue(true);
    };

    const setFalse = () => {
        setValue(false);
    };

    const reset = () => {
        setValue(initialValue);
    };

    return {value,toggle,setTrue,setFalse,reset};
};
