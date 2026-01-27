import { useState, useEffect } from "react";

function UsersListWithError() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <ul className="space-y-2">
      {users.map((user) => (
        <li key={user.id} className="border p-2 rounded">
          <p className="font-semibold">{user.name}</p>
          <p className="text-gray-600">{user.email}</p>
        </li>
      ))}
    </ul>
  );
}

export default UsersListWithError;