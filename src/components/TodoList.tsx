import { useSearchParams } from "react-router-dom";
import { TodoData, useTodoContext } from "../store/todoContext"

const TodoList = () => {
    const{data,toggleTodoAsCompleted,handleDeleteTask} = useTodoContext();
    let filterData = data;
    const [searchParams] = useSearchParams();
    if(searchParams.get("todo") == "active"){
      filterData = filterData.filter((todo)=> !todo.completed)
    }
    if(searchParams.get("todo") == "completed"){
      filterData = filterData.filter((todo)=> todo.completed)
    }
  return (
    <ul className=" min-w-96">
      {
        filterData.map((todo)=>{
            return<li key={todo.id} className="my-4 border-y-2 border-black-50 flex flex-row justify-evenly items-center">
              <input type="checkbox" name="checkbox" id={`TodoTask-${todo.id}`} className="basis-1/5" checked={todo.completed} onChange={()=>toggleTodoAsCompleted(todo.id)}/>
              <label htmlFor={`TodoTask-${todo.id}`} className={`m-4 ${todo.completed?"text-red-400 line-through":""} max-w-[200px] text-left basis-1/2`}>{todo.task}</label>
              {
                todo.completed && (
                  <button type="button" onClick={()=>handleDeleteTask(todo.id)} className="bg-[#ef4444] text-white px-3 py-1 m-3 max-h-10 rounded-md basis-1/4" >Delete</button>
                )
              }
            </li>
        })
      }
      
    </ul>
  )

}

export default TodoList
