import { useState, useEffect } from "react";

export const ApiFiltter = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [users, setUsers] = useState([]);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  
  useEffect(() => {
    if (!debouncedQuery) return;

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(user =>
          user.name.toLowerCase().includes(debouncedQuery.toLowerCase())
        );

        console.log("Filtered API Results:", filtered);
        setUsers(filtered);
      });
  }, [debouncedQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search user from API..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};