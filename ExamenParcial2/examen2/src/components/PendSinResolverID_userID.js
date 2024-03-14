import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/PendSinResolverID_userID.css'; 

function PendSinResolverID_userID() {
    const [unresolvedTodos, setUnresolvedTodos] = useState([]);

    useEffect(() => {
        async function fetchUnresolvedTodos() {
            try {
                const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
                const unresolvedTodos = response.data.filter(todo => !todo.completed);
                setUnresolvedTodos(unresolvedTodos);
            } catch (error) {
                console.error('Error fetching unresolved todos:', error);
            }
        }

        fetchUnresolvedTodos();
    }, []);

    return (
        <div className="unresolved-pendientes-container">
            <h1>Lista de Pendientes Sin Resolver (ID y UserID)</h1>
            <ul className="unresolved-pendientes-list">
                {unresolvedTodos.map(todo => (
                    <li key={todo.id} className="unresolved-pendientes-item">
                        <strong>ID:</strong> {todo.id} - <strong>UserID:</strong> {todo.userId}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PendSinResolverID_userID;
