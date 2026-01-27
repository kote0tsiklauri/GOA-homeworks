import { useState, useEffect } from "react";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) return <p>Loading...</p>;

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

export default UsersList;