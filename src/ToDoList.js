import React from 'react';
import Todo from './Todo';

export default function ToDoList({todo, setTodo}){
    return(
        <div className = "ToDoList">
            <h2>
                To Do List
            </h2>
            <div className="todo-container">
                <ul className="todo-list">
                {todo.map((todo) => (
                    <Todo todo={todo} setTodo={setTodo} key={todo.id} text={todo.text} />
                ))}
                </ul>
            </div>
        </div>
    );
}