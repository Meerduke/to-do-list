import React from 'react';

export default function Todo ({text, todo, todos, setTodos}){

    function deleteHandler(){
        setTodos(todos.filter((el) => el.id !== todo.id));
    };

    function completeHandler(){
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        })
        );
    };

    return(
        <div className="todo d-flex justify-content-evenly">
            <div className="col-9">
            <li maxLength="30" className={`todo-item ${todo.completed ? "completed" : ''}`}>
                {text}
            </li>
            </div>
            <div className="col-3">
            <button onClick={completeHandler} className="complete-btn me-1">
                <i className="fas fa-check-square"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash-alt"></i>
            </button>
            </div>
        </div>
    )
}