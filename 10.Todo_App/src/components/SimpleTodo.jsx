import React,{ useEffect, useState }  from 'react'
import { useContext } from 'react'
import { ThemeContext } from './Theme'; //1 import 1

function SimpleTodo()  {
  const {theme } =useContext(ThemeContext);  //2 function call kro use krna h to
   const [Input, setInput] = useState("")
   const [Tasks, setTasks] = useState(() => {
    
      const saved = localStorage.getItem("Tasks")
      return saved ? JSON.parse(saved) : []
  })
  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(Tasks));
  }, [Tasks]);
  

   const addTask = ()=>{
    if(Input.trim() === "") return; // Prevent adding empty tasks
      setTasks([ {text:Input, completed:false}, ...Tasks]);  //... ([Tasks, Input)] mtlb new add krne pe last me show hoga 
      setInput("");
    }
    const deleteTask = (indexToDelete) => {
      setTasks(Tasks.filter((_, index) => index !== indexToDelete));
    }
  const editTask = (indexToEdit) => {
    setInput(Tasks[indexToEdit].text);
    setTasks(Tasks.filter((_, index) => index !== indexToEdit));
 
  }

  // agar lazy init nhi use krna h to ye use kr lo  isme  react re rendering ke time pe hi localStorage se data lega - phle render pe empty dega [ek extra render hoga, phle empty, phir filled]
//  useEffect(() => {
//   let todoString = localStorage.getItem("tasks");
//   if (todoString) {
//     let todos = JSON.parse(localStorage.getItem("tasks"));
//     setTodos(todos);
//   }
// }, []);

const toggleComplete = (indexToToggle) => {
  setTasks(
    Tasks.map((task, index) =>
      index === indexToToggle ? { ...task, completed: !task.completed } : task
    )
  );
}
  return (
    <div className={`text-3xl font-bold text-center p-4  ${theme==="light" ? "bg-blue-400" : "bg-gray-800"} text-white min-h-screen`}>
      <h1>Simple Todo App</h1>
      <div>
        <textarea
        rows={1}
        placeholder='Add Task' className=' mt-2 p-2 rounded-lg text-black' value={Input}
         onChange={(e)=>setInput(e.target.value)}/>
        <button className='bg-green-500 p-2 m-1 rounded-lg' onClick={addTask}>  Add</button>

        {/* displaying tasks */}
        <ul className='list-disc'>
          {
            Tasks.map((task, index)=>(
              <li key={index} className='flex justify-between md:w-1/2 mx-auto my-2 bg-white text-black p-2 rounded-lg'>
              <input
              type='checkbox'
              checked={task.completed}
              onChange={() => toggleComplete(index)}
            />
            <span style={{textDecoration:task.completed ? 'line-through' : 'none'}}>
                {task.text}</span>

            <div>
                <button className='bg-yellow-500 p-1 m-1 rounded-lg' onClick={()=>editTask(index)}>Edit</button>
                <button className='bg-red-500 p-1 m-1 rounded-lg'onClick={()=> deleteTask(index)}>Delete</button> 
            </div>
  
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
};
export default SimpleTodo
// Yaha pe humne onClick me arrow function use kiya hai:
// onClick={() => deleteTask(i)}
//   Yaha direct function call diya hai → addTask.
// Kyuki jab button dabega, to React us function ko without arguments call kar dega.
// Aur addTask ko arguments ki zarurat hi nahi hai — bas wo input leke tasks update kar raha hai.
// Yaha thoda different hai:

// Har task ka ek unique index hota hai (i).
// Delete karne ke liye hume pata hona chahiye kaunsa task delete karna hai.
// Agar hum likh dete:
// To ye turant hi render time pe call ho jaata (galat).
// Isliye hum arrow function use karte hain:
