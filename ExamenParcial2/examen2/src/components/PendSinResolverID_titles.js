import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/PendSinResolverID_titles.css'; 

function PendSinResolverID_titles() {
    const [unresolvedTodos, setUnresolvedTodos] = useState([]);

    useEffect(() => {
        async function fetchTodos() {
            try {
                const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
                const todos = response.data;
                const unresolvedTodos = todos.filter(todo => !todo.completed);
                setUnresolvedTodos(unresolvedTodos);
            } catch (error) {
                console.error('Error fetching unresolved todos:', error);
            }
        }

        fetchTodos();
    }, []);

    return (
        <div className="pendientes-container"> 
            <h1>Lista de Pendientes Sin Resolver (ID y Título):</h1>
            <ul className="pendientes-list"> 
                {unresolvedTodos.map(todo => (
                    <li key={todo.id} className="pendientes-item"> 
                        <strong>ID:</strong> {todo.id} - <strong>Titulo:</strong> {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PendSinResolverID_titles;
