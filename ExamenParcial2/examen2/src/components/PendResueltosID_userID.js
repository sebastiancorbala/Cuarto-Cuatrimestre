import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/PendResueltosID_userID.css'; 

function PendResueltosID_userID() {
    const [resolvedTodos, setResolvedTodos] = useState([]);

    useEffect(() => {
        async function fetchResolvedTodos() {
            try {
                const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
                const resolvedTodos = response.data.filter(todo => todo.completed);
                setResolvedTodos(resolvedTodos);
            } catch (error) {
                console.error('Error fetching resolved todos:', error);
            }
        }

        fetchResolvedTodos();
    }, []);

    return (
        <div className="resolved-pendientes-container">
            <h1>Lista de Pendientes Resueltos (ID y UserID)</h1>
            <ul className="resolved-pendientes-list">
                {resolvedTodos.map(todo => (
                    <li key={todo.id} className="resolved-pendientes-item">
                        <strong>ID:</strong> {todo.id} - <strong>UserID:</strong> {todo.userId}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PendResueltosID_userID;
