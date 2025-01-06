import React, { useEffect, useState } from 'react';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>Lista de Usuarios</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;