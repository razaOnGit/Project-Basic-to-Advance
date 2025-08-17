import './index.css'
import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="bg-red-600 p-4 text-white">
        Hey Im red
      </div>
    </div>
  )
}

export default App
