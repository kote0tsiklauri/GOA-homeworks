import { useState, useEffect } from "react";

export const UserFiltter = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const users = [
    { id: 1, name: "Nino" },
    { id: 2, name: "Giorgi" },
    { id: 3, name: "Ana" },
    { id: 4, name: "Luka" },
    { id: 5, name: "Mariam" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    console.log("Filtered Results:", filtered);
  }, [debouncedQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search user..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};