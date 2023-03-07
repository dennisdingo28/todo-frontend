import React, { useEffect,useState,useRef } from 'react'
import { Link,useNavigate} from 'react-router-dom';
import { useParams} from 'react-router'
import axios from 'axios';

const Edit = () => {
  const navigate = useNavigate();
  const input = useRef();
  const {_id}=useParams();
  const [targetTodo,setTargetTodo]=useState({})
  const [editStatus,setEditStatus]=useState('');
  useEffect(()=>{
    getTodo(_id);
  },[])
  
  async function getTodo(id){
        try{
            const response = await axios.get(`/api/todos/${id}`) 
            setTargetTodo(response.data.todo);
           
        }catch(err)
        {
          console.log(err)
        }
    }

    async function updateTodo(id){
      try{
        const response = await axios.patch(`/api/todos/${id}`,{todo:input.current.value})
        setEditStatus("Completed")
        setTimeout(()=>{
            navigate("/");
        },3000)
      }catch(err){
        console.log(err)
      }
    
    }

  return (
    <div className='bg-[#424242]'>
      <div className='container mx-auto min-h-[100vh] max-w-[550px] flex items-center justify-center'>
        <div className='flex flex-col'>
            <div className='bg-[#533e8c] text-gray-300 rounded-t-md px-5 py-2'>
                <div>
                    <h2 className='text-gray-200 text-center text-[22px] xs:text-[25px] sm:text-[30px]'>Todo Information</h2>
                </div>
                <div className='currentTodo mt-2'>
                    <p className='text-[.90em]'>Todo ID : {_id}</p>
                </div>
            </div>
            <div className='px-2 py-1 text-[#533e8c] bg-[#ddd7ee]'>
                    <div>
                        <p className='font-bold'>Current Todo: {targetTodo.todo}</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <p className='font-bold'>New Todo: </p>
                        <input ref={input} type="text" autoFocus className='outline-none bg-transparent'/>
                    </div>
                    <div className='mt-4 text-gray-300 flex items-center justify-center gap-4'>
                        <button onClick={()=>navigate("/")} className='bg-[#7f1d1d] px-2 py-[0.5] rounded-sm hover:bg-red-600 duration-[.25s] active:scale-90'>Cancel</button>
                        <button onClick={()=>updateTodo(_id)} className='bg-[#14532d] px-2 py-[0.5] rounded-sm hover:bg-green-600 duration-[.25s] active:scale-90'>Save</button>
                    </div>
                    <p>{editStatus}</p>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Edit