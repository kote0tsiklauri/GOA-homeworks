import { useState } from "react";

export default function Password() {
  const [password, setPassword] = useState("");

  const length = password.length;
  const isLongEnough = password.length >= 8;
  
  const hasNumber = () =>{
    for (let i = 0; i < password.length; i++) {
      if (!isNaN(password[i])) {
        return true;
      }
    }
    return false;
  }

  return (
    <div>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>Length: {length}</p>
      <p>≥ 8 characters? {isLongEnough ? "Yes" : "No"}</p>
      <p>Contains number? {hasNumber() ? "Yes" : "No"}</p>
    </div>
  );
}