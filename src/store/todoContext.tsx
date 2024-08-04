import { createContext, ReactNode, useContext, useState } from "react";

//Defining types here
export type TodoProviderType = {
    children: ReactNode; //Here it means children could be react component, JSX element, number ,string etc
}
export type TodoData = {
    id:string;
    task:string;
    completed:boolean;
    createdAt: Date;
}
export type AllDataToShare ={
    data:TodoData[];
    handleAddTodo:(task:string)=>void;
    toggleTodoAsCompleted:(id:string)=>void;
    handleDeleteTask:(id:string)=>void;

}


//Here Created Context
export const TodoContext = createContext<AllDataToShare | null >(null);


//Here Create Provider
export const TodoProvider = ({children}: TodoProviderType)=>{
    const [data,setData]= useState<TodoData[]>(()=>{
        const newTodo = localStorage.getItem("todo") || "[]";
        return JSON.parse(newTodo) as TodoData[];
    });

    const handleAddTodo =(task:string)=>{
        setData((prev)=>{
            const newTodo:TodoData[]=[
                {
                    id: Math.random().toString(),
                    task:task,
                    completed: false,
                    createdAt: new Date()
                },
                ...prev
            ]
            console.log(newTodo);
            localStorage.setItem("todo",JSON.stringify(newTodo));
            return newTodo;
        })
    }

    const toggleTodoAsCompleted =(id:string)=>{
        setData((prev)=>{
            const newTodo = prev.map((e)=>{
                if(e.id == id){
                    return {...e,completed:!e.completed}
                }
                return e
            })
            localStorage.setItem("todo",JSON.stringify(newTodo));
            return newTodo;
        })
    }
    const handleDeleteTask =(id:string)=>{
        const newTodo = data.filter(todo=>todo.id != id);
        localStorage.setItem("todo",JSON.stringify(newTodo));
        setData(newTodo);
    }

    return <TodoContext.Provider value={{data, handleAddTodo,toggleTodoAsCompleted, handleDeleteTask}}>
        {children}
    </TodoContext.Provider>
}

//Here Declaring Consumer its is good practice to use useContext here and avoid using useContext of ever where instead
export const useTodoContext =()=>{
    const todosConsumer = useContext(TodoContext);
    if(!todosConsumer){
        throw new Error("useTodoContext outside of Context Provider")
    }
    return todosConsumer;
}