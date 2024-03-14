import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/PendientesID_Y_titles.css'; 

function PendientesID_y_titles() {
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
        <div className="pendientes-list-container">
            <h1>Lista de Pendientes (IDs y Títulos)</h1>
            <ul className="pendientes-list">
                {todos.map(todo => (
                    <li key={todo.id}>
                        <strong>ID:</strong> <span className="todo-id">{todo.id}</span> - <strong>Título:</strong> <span className="todo-title">{todo.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PendientesID_y_titles;