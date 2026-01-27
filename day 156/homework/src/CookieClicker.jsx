import { useState } from "react";
import { FaCookie } from "react-icons/fa"; // react-icons/fa

function CookieClicker() {
  const [cookies, setCookies] = useState(0);

  return (
    <div className="p-4 border rounded-lg w-fit flex flex-col items-center gap-2">
      <p className="text-xl">
        Cookies: {cookies} <FaCookie className="inline text-yellow-500" />
      </p>
      <button
        className="px-4 py-1 bg-yellow-400 rounded text-white font-bold"
        onClick={() => setCookies(cookies + 1)}
      >
        Click me
      </button>
    </div>
  );
}

export default CookieClicker;