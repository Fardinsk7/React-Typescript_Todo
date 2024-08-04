import { Link, useSearchParams } from "react-router-dom"

const Navbar = () => {
    const [searchParam] = useSearchParams();
    const todoParam = searchParam.get("todo");

    return (
    <div className="flex w-96 justify-evenly m-4">
      <Link to="/" className={todoParam == null?"text-black font-bold":""}>All</Link>
      <Link to="/?todo=active" className={todoParam == "active"?"text-black font-bold":""}>Active</Link>
      <Link to="/?todo=completed" className={todoParam == "completed"?"text-black font-bold":""}>Completed</Link>
    </div>
  )
}

export default Navbar
