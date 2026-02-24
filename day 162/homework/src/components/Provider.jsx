import React, { useContext } from "react";
import text from "../contexts/Context";

function Example1Child() {
  const value = useContext(text);
  return <div>{value}</div>;
}

export default Example1Child;