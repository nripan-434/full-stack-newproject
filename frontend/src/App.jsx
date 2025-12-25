import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Navbar from './components/Navbar'
import Userregister from './pages/Userregister'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/userreg' element={<Userregister/>} />
        
      </Routes>
      
    </div>
  )
}

export default App
