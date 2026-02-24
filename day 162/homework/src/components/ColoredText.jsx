import { useContext } from "react";
import color from "../contexts/ColorContext";
function ColoredText() {
  const value = useContext(color);
  return <div style={{ color: value }}>This text is colored!</div>;
}

export default ColoredText;