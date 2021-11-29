import react from "react";

const Todo=({text ,todo ,toDos , settoDos })=>{
    const deleteHandler=()=>{
        settoDos(toDos.filter((el) => el.id !== todo.id));
        
    };

    const completeHandler= ()=>{
settoDos(
    toDos.map((item)=>{
if(item.id===todo.id){
    return{
        ...item,
        completed:!item.completed  
      };
}
return item;
    })
    );
    };

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed":''}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo; 