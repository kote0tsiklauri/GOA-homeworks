import { useState,useEffect } from "react";

export const usePrevious = (value) => {
    const [previous, setPrevious] = useState(undefined);

    useEffect(() => {
        setPrevious(value);
    }, [value]);


    return previous;
};
