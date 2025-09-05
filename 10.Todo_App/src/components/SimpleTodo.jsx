import React from 'react'
import { useState } from 'react'
const SimpleTodo  = () => {
   const [Input, setInput] =useState("");
   const [Tasks, setTasks] = useState([]);
   const addTask = ()=>{
    if(Input.trim() === "") return; // Prevent adding empty tasks
      setTasks([Input, ...Tasks]);  //... ([Tasks, Input)] mtlb new add krne pe last me show hoga 
      setInput("");
    }

  return (
    <div className='text-3xl font-bold text-center p-4 bg-blue-500 text-white min-h-screen'>
      <h1>Simple Todo App</h1>
      <div>
        <input type="text" placeholder='Add Task' className='p-2 rounded-lg text-black' value={Input}
         onChange={(e)=>setInput(e.target.value)}/>
        <button className='bg-green-500 p-2 m-2 rounded-lg' onClick={addTask}>  Add</button>

        {/* displaying tasks */}
        <ul className='list-disc'>
          {
            Tasks.map((task, index)=>(
              <li key={index} className='flex justify-between w-1/3 mx-auto my-2 bg-white text-black p-2 rounded-lg'>
                {task}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default SimpleTodo
