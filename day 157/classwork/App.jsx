import React, { useState, useEffect } from 'react';


function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
    useEffect(() => {
        const controller = new AbortController();
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/users', { signal: controller.signal });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                if(!controller.signal.aborted){
                    setLoading(false);
                }
            }
        };
        fetchUsers();
        return () => { controller.abort(); };
    }, []);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <ul>
        {users.map(user => (
            <li key={user.id}>{user.name} ({user.email})</li>
        ))}
        </ul>
    );

}



export default UsersList;