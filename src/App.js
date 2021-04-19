import Form from './Form';
import ToDoList from './ToDoList';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>To Do Today</h1>
      </header>
      <Form />
      <ToDoList />
    </div>
  );
}

export default App;
