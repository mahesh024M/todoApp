/* eslint-disable */
import { useState } from 'react'
import {CreateTodo} from './components/CreateTodo'
import {Todos} from './components/Todos'
  function App() {
    
  const [todos,setTodos]=useState([])
  
   fetch("http://localhost:8000/todos")
   .then(async function(res){
      const json=await res.json();
      setTodos(json.todos)
   })
    
  
    

  return (
    <>
      <CreateTodo ></CreateTodo>
      <Todos todos={todos}></Todos>
    </>
  )
}




export default App
