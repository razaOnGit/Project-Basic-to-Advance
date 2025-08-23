import React from 'react'

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center p-4"> 
     <h1 className="text-2xl font-bold">
          <span className="text-green-700">&lt;</span>
          <span>Pass</span><span className="text-green-600">OP/&gt;</span>
        </h1>
      <ul>
        <li className='flex gap-4'>
            <a className='hover:font-bold'  href='/'>Home</a>
            <a className='hover:font-bold' href='#'>About</a>
            <a className='hover:font-bold'   href='#'>Contact</a>
        </li>
      </ul>
      <button className='text-white bg-green-700 my-5 mx-2 rounded-full flex  justify-between items-center cursor-pointer ring-white ring-1'>
        <img className='invert  w-10 p-1' width="0" src="github.svg" alt="github" />
         <span className='font-bold px-2'>GitHub</span>
      </button >
    </nav>
  )
}

export default Navbar

  
