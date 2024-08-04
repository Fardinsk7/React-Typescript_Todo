import { FormEvent, useState } from "react"
import { useTodoContext } from "../store/todoContext";

const InputsToDo = () => {
  const [todo,setTodo]=useState("");
  const {handleAddTodo} = useTodoContext();

  const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{ // FormEvent is generic which means it can take multiple type like here we use one HTMLFormElement
    e.preventDefault();
    if(todo === ""){
      return alert("Please atleast a character in Input 🙏🏻");
    }
    handleAddTodo(todo);
    setTodo("")
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} className="border border-gray-400 px-2 py-1 m-2 outline-none rounded-md" placeholder="Add Tasks"/>
      <button type="submit" className="bg-blue-400 text-white px-4 py-1 rounded-md">Add</button>
    </form>
  )
}

export default InputsToDo
