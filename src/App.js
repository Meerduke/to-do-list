import Form from './Form';
import ToDoList from './ToDoList';
import React, { useState } from 'react';

import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>To Do Today</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todo={todo} setTodo={setTodo} />
      <ToDoList todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
