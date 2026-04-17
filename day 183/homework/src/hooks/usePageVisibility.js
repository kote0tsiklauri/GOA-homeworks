import { useEffect, useState } from "react";

const usePageVisibility = () => {
    const [visible, setVisible] = useState(
        document.visibilityState === "visible"
    );

    useEffect(() => {
        const handle = () => {
        setVisible(document.visibilityState === "visible");
        };

        document.addEventListener("visibilitychange", handle);

        return () => {
        document.removeEventListener("visibilitychange", handle);
        };
    }, []);

    return visible;
};

export default usePageVisibility;