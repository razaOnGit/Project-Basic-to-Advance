import React from 'react'
import { Link } from 'react-router-dom'
import{ThemeContext} from './Theme'  //1 import krna h 
import { useContext } from 'react'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);  // 2 function bnao
  return (
    <nav className={`flex justify-between py-2 ${theme ==="light" ? "bg-purple-600" : "bg-gray-800"} text-white`}>
  <div className="logo">
     <span className="text-xl font-bold p-2">Task Planner</span>
    </div>
   <ul className='flex space-x-4 mx-4'>
    <li className='cursor-pointer hover:text-blue-500 font-bold'>
          <Link to="/">Home</Link>
    </li>
     <li className='cursor-pointer hover:text-blue-200 transition-colors font-semibold'>
          <Link to="/SimpleTodo">Simple To-Do</Link>
        </li>
   </ul>
   <button onClick={toggleTheme} className=' mx-4 px-3 bg-gray-300 text-black  rounded-full hover:bg-gray-400'>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  )
}

export default Navbar
