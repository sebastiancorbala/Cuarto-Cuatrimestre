import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/PendientesID_userID.css'; 

function PendientesID_userID() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function fetchTodos() {
            try {
                const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
                setTodos(response.data);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        }

        fetchTodos();
    }, []);

    return (
        <div className="pendientes-id-userid-container">
            <h1 className="title">Lista de Pendientes (IDs y UserID)</h1>
            <ul className="pendientes-id-userid-list">
                {todos.map(todo => (
                    <li key={todo.id} className="pendientes-id-userid-item">
                        <strong>ID:</strong> {todo.id} - <strong>UserID:</strong> {todo.userId}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PendientesID_userID;