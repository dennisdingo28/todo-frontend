import Header from "./components/Header";
import Todo from "./components/Todo";
import { useState,useEffect } from "react";
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Edit from "./pages/Edit";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/edit/:_id" element={<Edit/>}/>
      </Routes>
    </Router>
  )
}

function Home() {

  const [todoInput,setTodoInput]=useState("");
  const [todos,setTodos]=useState("");
  async function addTodo(value){
    try{
      const response = await axios.post('/api/todos', {todo:value})
    }catch(err){
      console.log(err);
    }
  }
  async function getData(){
    try{
      const data = await axios.get('/api/todos');
      setTodos(data.data.todo);
    }catch(err){
      console.log(err);
    }
    
  }

  async function deleteTodo(id){
    try{
      const response = await axios.delete(`/api/todos/${id}`)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
      getData();
  },[])
  
  return (
    <div className="App bg-[#424242]">
      <div className="container mx-auto min-h-[100vh] max-w-[550px] flex items-center justify-center">
          <div className="w-[100%] flex flex-col">
            <div>
              <Header todoInput={todoInput} setTodoInput={setTodoInput} addTodo={addTodo}/>
            </div>
            <div className="bg-[#e9e9e9] flex flex-col">
              <div className="todoBodyHeader mt-2 mb-1 text-center">
                <p className="font-medium">number of tasks (0)</p>
              </div>
              <div className="todoBody flex gap-5 flex-col pb-2">
                {!todos ? <p className="text-center">Loading....</p> : todos.map(todo=><Todo {...todo} deleteTodo={deleteTodo}/>)}
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default App;
