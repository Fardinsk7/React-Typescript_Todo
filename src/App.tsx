import InputsToDo from "./components/InputsToDo"
import Navbar from "./components/Navbar"
import TodoList from "./components/TodoList"


function App() {

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center ">
      <h1 className="text-3xl font-bold m-3 mt-16" > Todo App </h1>
      <InputsToDo/>
      <Navbar/>
      <TodoList/>
    </div>
  )
}

export default App
