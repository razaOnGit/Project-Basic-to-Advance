import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-purple-600 text-white py-2'>
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
    </nav>
  )
}

export default Navbar
