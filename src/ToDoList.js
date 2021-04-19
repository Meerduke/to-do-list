import React from 'react';
import Todo from './Todo';

export default function ToDoList({todos, setTodos}){
    return(
        <div className = "ToDoList">
            <h2>
                To Do List
            </h2>
            <div className="todo-container">
                <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} text={todo.text} />
                ))}
                </ul>
            </div>
        </div>
    );
}