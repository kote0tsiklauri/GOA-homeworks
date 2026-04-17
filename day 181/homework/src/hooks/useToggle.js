import { use, useState } from "react";

export const useToggle = (initialValue = false) => {
    let [value,setValue] = useState(flase)

    const toggle = () => setValue(prevValue => !prevValue);

    return [value, toggle];
}
