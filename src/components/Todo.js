import React from 'react'
import { Link } from 'react-router-dom'

const Todo = ({_id, todo, completed, deleteTodo}) => {
  return (
    <div className='px-5 py-2 bg-[#ddd7ee] cursor-pointer flex items-center justify-between'>
        <div className='todoContainer'>
            <p className='text-[20px] font-medium'>{todo}</p>
        </div>
        <form className='todoOptions flex items-center gap-2'>
            <Link to={`/edit/${_id}`} className="text-green-900 bi bi-pencil-square text-[25px] cursor-pointer"></Link>        
            <button onClick={()=>deleteTodo(_id)}><i className="bi bi-trash3-fill text-red-900 text-[25px] cursor-pointer"></i></button>
        </form>
    </div>
  )
}

export default Todo