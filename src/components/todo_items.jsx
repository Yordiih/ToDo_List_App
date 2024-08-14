import React from 'react'
import tick from '../assets/tick.webp'
import no_ttick from '../assets/check-box-not-selected-3.png'
import Delete_i from '../assets/delete.png'

const todo_items = ({text, id, isComplete, deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-3 bg-gray-100 rounded-lg p-3'>
  <div className='flex flex-1 items-center cursor-pointer' onClick={() => toggle(id)}>
    <img src={isComplete ? tick : no_ttick} alt="" className='w-8 h-8' />
    <p className={`text-gray-700 ml-4 text-[17px] ${isComplete ? "line-through" : ""}`}>{text}</p>
  </div>

  <img onClick={() => deleteTodo(id)} src={Delete_i} alt="" className='w-6 h-6 cursor-pointer hover:text-red-500 transition-colors duration-300' />
</div>
  )
}

export default todo_items
