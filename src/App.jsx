import React from 'react'
import Navbar from './components/navbar'
import Features from './components/features'
import Work from './components/work.jsx'
import { Route,Routes } from 'react-router-dom'
import Footer from './components/footer.jsx'
function App() {
  

  return (
    <>
      
        <div className=''>
          <Navbar/>
          <Features/>
          <Work/>
          <Footer/>
      
      </div>
    
      
    </>
  )
}
export default App

