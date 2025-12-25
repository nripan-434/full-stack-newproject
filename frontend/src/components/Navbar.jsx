import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between p-4'>
        <div>
            Logo
        </div>
        <div>
            <Link to={'/login'}>sign in</Link>
        </div>
    </div>
  )
}

export default Navbar
