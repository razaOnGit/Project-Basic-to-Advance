import React from 'react'
import Navbar from './components/Navbar.jsx'
import './App.css'
import Manager from './components/Manager.jsx'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <>
      <Navbar />
      <div className='min-h-[80vh]'> 
      <Manager/>
      </div>
     <Footer />
    </>
  )
}

export default App
