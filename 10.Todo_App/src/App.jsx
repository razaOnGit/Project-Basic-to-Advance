import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SimpleTodo from './components/SimpleTodo'
import Footer from './components/Footer'

const App = () => {
  return (
  <>
 <main>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/SimpleTodo' element={<SimpleTodo />} />
    </Routes>
 </main>
 <Footer />
  </>
  )
}

export default App
