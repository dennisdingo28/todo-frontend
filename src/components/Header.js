import React from 'react'

const Header = (props) => {
    const {todoInput,setTodoInput,addTodo}=props;
  return (

    <div className='bg-[#533e8c] w-[100%] py-2 rounded-t-md px-5 flex flex-col gap-5'>
        <h1 className='text-gray-200 text-center text-[22px] xs:text-[25px] sm:text-[30px]'>Todo Manager</h1>   
        <div>
            <form className='flex items-center gap-5'>
                <input 
                    onChange={(e)=>setTodoInput(e.target.value)} 
                    value={todoInput} 
                    type="text" 
                    placeholder='New task ...' 
                    className='px-3 py-2 text-sm rounded-lg outline-none w-[100%]' />
                <button onClick={()=>addTodo(todoInput)} className='bg-[#00d26a] text-white px-5 py-1 rounded-lg hover:bg-[#359f6a] duration-75 active:scale-95'>Add</button>
            </form>
        </div>
    </div>
    
  )
}

export default Header