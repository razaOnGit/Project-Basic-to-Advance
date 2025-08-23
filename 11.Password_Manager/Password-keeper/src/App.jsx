import React from 'react'
import Navbar from './components/Navbar.jsx'
import './App.css'
import Manager from './components/Manager.jsx'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <>
      <Navbar />
        <div className=" bg-green-200 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
          <Manager />
          <Footer />
        </div>
        
    </>
  )
}

export default App
