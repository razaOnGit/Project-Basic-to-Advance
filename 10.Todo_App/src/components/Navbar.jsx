import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-purple-600 text-white py-2'>
  <div className="logo">
     <span className="text-xl font-bold">Todo App</span>
    </div>
   <ul className='flex space-x-4 mx-4'>
    <li className='cursor-pointer hover:text-blue-500 font-bold'>home</li>
      <li className='cursor-pointer hover:text-blue-500   font-bold'>Your Tasks</li>
    
   </ul>
    </nav>
  )
}

export default Navbar
