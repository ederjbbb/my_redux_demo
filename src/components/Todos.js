import { useDispatch, useSelector } from "react-redux"

import React from "react"
import { removeTodo } from "../app/features/todo/todoSlice"

export function Todos () {
    const dispatch = useDispatch(state => state.totos)
    const  todos = useSelector((state) => state.todos)


    return( 
    <>
        <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400" style={{marginTop: '20px'}}>
            {todos.map(todo => ( <li style={{display: 'flex' , justifyContent: 'space-between'}}key={todo.id}>{todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id)) } type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">X</button>

            </li>))}
           
        
        </ul>
    </>



    )

}