import React from "react";
import TodoItem from "./TodoItem";


const Todos = (props) => {
  let myStyle ={
    minHeight: "70vh",
    margin : "40px auto",
  }

  return (
     <div className="container" style={myStyle}>
         <h3 className="my-3">Todo List</h3>
         {props.todos.length === 0 ? "No Todo diplay" :
         props.todos.map((todo)=>{
            return (
              <div>  
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr/>
              </div>
            );
        })
      }
     </div>
  );
};

export default Todos;
