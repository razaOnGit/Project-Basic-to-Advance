import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center p-2 bg-gray-800 '>
      <div>   <h1 className="text-2xl font-bold">
          <span className="text-green-700">&lt;</span>
          <span>Pass</span><span className="text-green-600">OP/&gt;</span>
        </h1>
        <lord-icon className=" px-8 cursor-pointer" 
    src="https://cdn.lordicon.com/dyfvgeqj.json"
    trigger="hover"
   >
</lord-icon>
</div>
    <div className='flex  font-semibold text-white w-80'> 
      Created with &#10084; Md. Raza Khan
      </div>
      </div>
    
  )
}

export default Footer
