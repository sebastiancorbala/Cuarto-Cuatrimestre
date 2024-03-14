import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/PendientesID.css'; 

function PendientesID() {
    const [todoIds, setTodoIds] = useState([]);

    useEffect(() => {
        async function fetchTodos() {
            try {
                const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
                const todos = response.data;
                const todoIds = todos.map(todo => todo.id);
                setTodoIds(todoIds);
            } catch (error) {
                console.error('Error fetching todos:', error);
            }
        }

        fetchTodos();
    }, []);

    return (
        <div className="pendientes-list-container"> 
            <h1>Lista de IDs de Pendientes:</h1>
            <ul className="pendientes-list"> 
                {todoIds.map(todoId => (
                    <li key={todoId}>{todoId}</li>
                ))}
            </ul>
        </div>
    );
}

export default PendientesID;