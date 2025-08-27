import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white flex items-center justify-center px-4 h-16'>
       
      <div className="flex flex-col items-center ">
        Copyright &copy; {currentYear} Get me A Chai - All rights reserved!
       <div className=' font-semibold text-white w-80'> 
      Created with <span className='text-red-500'>&#10084;</span> by Md. Raza Khan
      </div>
      </div>
    </footer>
  )
}

export default Footer