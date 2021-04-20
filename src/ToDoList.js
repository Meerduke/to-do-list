import React from 'react';
import Todo from './Todo';

export default function ToDoList({todos, setTodos, filteredTodos}){
    return(
        <div className = "ToDoList">
            <h2>
                To Do List
            </h2>
            <div className="todo-container">
                <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                    key={todo.id}
                    text={todo.text} />
                ))}
                </ul>
            </div>
        </div>
    );
}