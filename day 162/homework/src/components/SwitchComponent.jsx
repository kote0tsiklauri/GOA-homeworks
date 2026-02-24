import { useContext } from "react";
import IsOn from "../contexts/SwitchContext";
function SwitchComponent() {
  const value = useContext(IsOn);
  return <div>{value ? "ON" : "OFF"}</div>;
}   

export default SwitchComponent;