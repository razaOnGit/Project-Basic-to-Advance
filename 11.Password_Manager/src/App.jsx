// ...existing code...
import React from 'react'
import Navbar from './components/Navbar.jsx'
import './App.css'
import Manager from './components/Manager.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    // make app a column flex container that fills viewport
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />

      {/* main grows to take available space so footer stays at bottom */}
      <main className="flex-1 bg-green-200 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <Manager />
      </main>

      <Footer />
    </div>
  )
}

export default App
