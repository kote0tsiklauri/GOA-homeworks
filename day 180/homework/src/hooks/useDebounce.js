import {useState, useEffect} from "react";

export const useDebouncedQuery = (query, delay) => {
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [query, delay]);

    return debouncedQuery;
};