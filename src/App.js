import React,{ useEffect, useState } from 'react';
import './App.css';
//importing components
import Form from "./component/form";
import Todolist from "./component/todolist";


function App() {
  const [inputText, setInputText]= useState("");
  const [toDos,settoDos]= useState([]);
  const [status, setStatus]=useState("all");
  const [filteredTodos , setFilteredTodos]= useState([]);

  useEffect(()=>{
  filterHandler();
  savelocalTodos();
  },[toDos , status]);

  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(toDos.filter(todo => todo.completed === true))
        break;

        case 'uncompleted':
          setFilteredTodos(toDos.filter(todo => todo.completed === false))
          break;

        default:
            setFilteredTodos(toDos)
            break;
    }
  }

  const savelocalTodos = () =>{
    localStorage.setItem("todos", JSON.stringify(toDos));
  };
  const getlocalTodos = () =>{
    if(localStorage.getItem("todos")=== null){
      localStorage.setItem("todos",JSON.stringify([]));
    } else {
     let todoLocal = localStorage.setItem("todos", JSON.stringify(toDos));
      settoDos(todoLocal);
    }
  }
  return (
    <div className="App">
     <header>
       <h1>TO DO APP</h1>
     </header>
     <Form setInputText={setInputText} inputText={inputText} toDos={toDos} settoDos={settoDos} setStatus={setStatus}/>
     <Todolist filteredTodos={filteredTodos} toDos={toDos} settoDos={settoDos}/>
    </div>
  );
}

export default App;
