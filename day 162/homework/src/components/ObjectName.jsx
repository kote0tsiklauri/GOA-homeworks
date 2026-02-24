import React, { useContext } from "react";
import object from "../contexts/ObjextContext";

function ShowName() {
  const user = useContext(object);
  return <div>{user.name}</div>;
}

export default ShowName;