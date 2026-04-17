import { useState, useRef, useEffect } from "react";

const useHover = () => {
    const ref = useRef(null);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const onEnter = () => setHovered(true);
        const onLeave = () => setHovered(false);

        node.addEventListener("mouseenter", onEnter);
        node.addEventListener("mouseleave", onLeave);

        return () => {
        node.removeEventListener("mouseenter", onEnter);
        node.removeEventListener("mouseleave", onLeave);
        };
    }, []);

    return [ref, hovered];
};

export default useHover;