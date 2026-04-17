import { useEffect, useRef } from "react";

const useEventListener = (event, handler, element = window) => {
    const savedHandler = useRef();

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        const target = element?.current || element;
        if (!target?.addEventListener) return;

        const eventListener = (e) => savedHandler.current(e);

        target.addEventListener(event, eventListener);

        return () => {
        target.removeEventListener(event, eventListener);
        };
    }, [event, element]);
};

export default useEventListener;