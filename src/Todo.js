import {useState} from "react";

function Todo(){
  const [toDo,setTodo] =useState("");
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit =(event) =>{
    event.preventDefault();

  }
return(
<div>
   <form onSubmit={onSubmit}>
   <input
    onChange={onChange} 
    value={toDo}
    type="text"
     placeholder="Write your to do"/>
     <button>Add To Do</button>
   </form>
  </div>
)

}

export default Todo;