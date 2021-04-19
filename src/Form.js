import React from 'react';

export default function Form({inputText, setInputText, todo, setTodo}){

    function inputTextHandler(event){
        setInputText(event.target.value);
    };

    function submitTodoHandler(event){
        event.preventDefault();
        setTodo([...todo, {text: inputText, completed: false, id: Math.random() * 1000}]);
        setInputText("");
    };

    return(
        <div className = "Form">
            <h2>Form</h2>
            <form>
                <input value={inputText} onChange={inputTextHandler} type="text"/>
                <button onClick={submitTodoHandler} type="submit" className="btn btn-primary">
                    <i className="far fa-calendar-plus"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    );
}