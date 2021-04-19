import React from 'react';

export default function Todo ({text, todo, setTodo}){


    return(
        <div className="todo">
            <li className="todo-item">
                {text}
            </li>
            <button className="complete-btn">
                <i className="fas fa-check-square"></i>
            </button>
            <button className="trash-btn">
                <i className="fas fa-trash-alt"></i>
            </button>
        </div>
    )
}