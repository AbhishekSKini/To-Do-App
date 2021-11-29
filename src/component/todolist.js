import React from "react";
//import components
import Todo from "./Todo";

const Todolist =({toDos, settoDos , filteredTodos })=>{
    return(
        <div className="todo-container">
        <ul className="todo-list">
            {filteredTodos.map((todo)=>(
                <Todo key={todo.id} text={todo.text} todo={todo} toDos={toDos} settoDos={settoDos} />
            ))}
      </ul>
      </div>
      
    );
};
export default Todolist;