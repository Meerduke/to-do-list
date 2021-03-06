import Form from './Form';
import ToDoList from './ToDoList';
import React, { useState,useEffect } from 'react';

import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);
  
  useEffect(() => {
    function filterHandler(){
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  function saveLocalTodos(){
    localStorage.setItem("todos",JSON.stringify(todos));
  };
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);


  function getLocalTodos(){
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos",JSON.stringify([]));
    }else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>To Do Today.</h1>
      </header>
      <Form
      inputText={inputText}
      setInputText={setInputText}
      todos={todos}
      setTodos={setTodos}
      setStatus={setStatus}
      />
      <ToDoList
      todos={todos}
      setTodos={setTodos}
      filteredTodos={filteredTodos} 
      />
    </div>
  );
};

export default App;
