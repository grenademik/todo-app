import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
function App() {
  const AppName ='Naya Naam';
  const [list, setlist] = useState([]);

  const addedtodo = (task) => {
    setlist((prev) =>[...prev, task])
  }

  const clearalltask = () => {
    setlist([]);
  }
  return (
    <div className='todo-card'>
    <TodoTitle title={AppName}/>
    <AddTask addedTodo={addedtodo}/>
    <ShowTask listOfTask={list}/>
    <ClearTask cleartasks={clearalltask}/>
    </div>
  );
}

function TodoTitle({title}){
  return(
    <div>
      <h1>{title}</h1>
    </div>
   );
}

function AddTask({addedTodo}){ 
  const [task, setTask] = useState("");

  const handleAddTask = (event) =>{
    const taskValue = event.target.value;
    setTask((_) => taskValue)
  }

  const addingTask = () => {
    addedTodo(task); 
  }

  return(
  <div>
    <input placeholder="Add new task" onChange={handleAddTask} value={task}/>
    <button onClick={addingTask}>+</button>
  </div>

  );
}

function ShowTask({listOfTask}){
  return(
    <div className='todo-ShowTask'>
      <ol>
      {
        listOfTask.map((todoelement, index) =>(
          <>
          <li key={index}>{todoelement}</li>
          </>
        )) 
      }<p>a</p>
      </ol>
    </div>
   
  );
}
    
function ClearTask({cleartasks}){
  const clearalltask = () =>{
    cleartasks();
  } 
  return(
  <div>
    <button onClick={clearalltask}>Clear All</button>
  </div>
  );
}
   


export default App;
