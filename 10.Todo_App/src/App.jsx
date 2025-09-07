import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SimpleTodo from './components/SimpleTodo'
import Footer from './components/Footer'
import ThemeApp from './components/Theme'

const App = () => {
  return (
  
  <ThemeApp>
 <main>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/SimpleTodo' element={<SimpleTodo />} />
    </Routes>
 </main>
 <Footer />
</ThemeApp>
  )
}

export default App
