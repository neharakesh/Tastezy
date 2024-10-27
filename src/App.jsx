import React from 'react'
import Navbar from './components/navbar'
import Features from './components/features'
import Work from './components/work.jsx'
import { Route,Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      
        <div className=''>
          <Navbar/>
          <Features/>
          <Work/>
          
      
      </div>
    
      
    </>
  )
}
export default App

