import React from 'react';

export default function Form({inputText, setInputText, todos, setTodos, setStatus}){

    function inputTextHandler(event){
        setInputText(event.target.value);
    };

    function submitTodoHandler(event){
        event.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}]);
        setInputText("");
    };

    function statusHandler(event){
        setStatus(event.target.value);
    }

    return(
        <div className = "Form">
            <form className="d-block justify-content-center">
                <input value={inputText} onChange={inputTextHandler} type="text"/>
                <button onClick={submitTodoHandler} type="submit" className="btn btn-primary">
                    Add
                </button>
                <div className="select">
                    <span>
                        Filter By:
                    </span>
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );
}