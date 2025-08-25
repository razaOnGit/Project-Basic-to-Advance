import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='bg-gray-900 shadow-xl shadow-white text-white flex justify-between items-center px-4 md:h-16'>

      <Link className="logo font-bold text-lg flex justify-center items-center" href={"/"}>
        <img className='invertImg' src="tea.gif" width={44} alt="" />
        <span className='text-xl md:text-base my-3 md:my-0'>Get Me a Chai!</span>
      </Link>

      <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul>

    </nav>
  )
}

export default Navbar
