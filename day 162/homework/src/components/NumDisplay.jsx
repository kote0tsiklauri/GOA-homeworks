import { useContext } from "react";
import number from "../contexts/NumContext";
function NumProvider() {
  const value = useContext(number);
  return <div>number is: {value}</div>;
}

export default NumProvider;