import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/PendResueltosID_titles.css'; 

function PendResueltosID_titles() {
    const [resolvedTodos, setResolvedTodos] = useState([]);

    useEffect(() => {
        async function fetchResolvedTodos() {
            try {
                const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
                const todos = response.data;
                const resolvedTodos = todos.filter(todo => todo.completed);
                setResolvedTodos(resolvedTodos);
            } catch (error) {
                console.error('Error fetching resolved todos:', error);
            }
        }

        fetchResolvedTodos();
    }, []);

    return (
        <div className="resolved-pendientes-container"> 
            <h1>Lista de Pendientes Resueltos (ID y Título):</h1>
            <ul className="resolved-pendientes-list"> 
                {resolvedTodos.map(todo => (
                    <li key={todo.id} className="resolved-pendientes-item"> 
                        <strong>ID:</strong> {todo.id} - <strong>Titulo:</strong> {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PendResueltosID_titles;