import React, { useEffect, useRef, useState } from 'react'
import todo from '../assets/Todo.png'
import Todo_items from './todo_items'

const Todo = () => {
    const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();

        if (inputText === "") {
            return null;
        }
        const newTodo ={
            id: Date.now(),
            text: inputText,
            isComplete:false,
        }
        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = "";
    }

    const deleteTodo =(id) => {
        setTodoList((pryTodos) => {
            return pryTodos.filter((todo) => todo.id !== id)
        })
    };


    const toggle =(id) => {
        setTodoList((prevTodos) => {
            return prevTodos.map((todo) => {
                if(todo.id === id){
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo;
            })
        })
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList));
    }, [todoList])

  return (
    <div className='bg-white w-full max-w-3xl flex flex-col p-7 rounded-2xl shadow-lg'>
    <div className='flex items-center mt-7 gap-3'>
      <img src={todo} alt="" className='w-10 h-10' />
      <h1 className='text-4xl font-bold text-purple-700'>To-Do List</h1>
    </div>
  
    <div className='flex items-center my-7 bg-gray-100 rounded-full'>
      <input ref={inputRef} className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-gray-500 text-gray-700" type="text" placeholder='Add task' />
      <button onClick={add} className='border-none rounded-full bg-purple-500 w-32 h-14 text-white text-lg font-medium cursor-pointer hover:bg-purple-600 transition-colors duration-300'>
        ADD
      </button>
    </div>
  
    <div className='overflow-y-auto flex-1'>
      {todoList.map((item, index) => (
        <Todo_items
          key={index}
          text={item.text}
          id={item.id}
          isComplete={item.isComplete}
          deleteTodo={deleteTodo}
          toggle={toggle}
        />
      ))}
    </div>
  </div>
  )
}

export default Todo